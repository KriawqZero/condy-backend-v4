/*
  Seed para popular usuários base e um imóvel para o Admin.
  Execução sugerida:
    - yarn seed
*/

import { PrismaClient, UserStatus, UserType } from '@prisma/client';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function upsertUser(data: {
  name: string;
  status?: keyof typeof UserStatus;
  email: string;
  password: string;
  cpfCnpj: string;
  whatsapp: string;
  userType: keyof typeof UserType;
  dataNascimento?: string;
  periodoMandatoInicio?: string;
  periodoMandatoFim?: string;
}) {
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.upsert({
    where: { email: data.email },
    update: {
      name: data.name,
      cpfCnpj: data.cpfCnpj,
      whatsapp: data.whatsapp,
      userType: data.userType,
      password: hashed,
      status: data.status ?? 'PENDENTE',
      dataNascimento: data.dataNascimento ? new Date(data.dataNascimento) : null,
      periodoMandatoInicio: data.periodoMandatoInicio ? new Date(data.periodoMandatoInicio) : null,
      periodoMandatoFim: data.periodoMandatoFim ? new Date(data.periodoMandatoFim) : null,
    },
    create: {
      name: data.name,
      email: data.email,
      cpfCnpj: data.cpfCnpj,
      whatsapp: data.whatsapp,
      userType: data.userType,
      password: hashed,
      status: data.status,
      dataNascimento: data.dataNascimento ? new Date(data.dataNascimento) : null,
      periodoMandatoInicio: data.periodoMandatoInicio ? new Date(data.periodoMandatoInicio) : null,
      periodoMandatoFim: data.periodoMandatoFim ? new Date(data.periodoMandatoFim) : null,
    },
  });
  return user;
}

async function createImovelParaGestor(gestorId: string) {
  const nomes = ['Residencial Jardim das Palmeiras', 'Condomínio Vista Bella', 'Edifício Atlântico'];
  const ruas = ['Rua das Laranjeiras', 'Avenida das Flores', 'Rua do Bosque'];
  const bairros = ['Santo Amaro', 'Pinheiros', 'Vila Mariana'];

  return prisma.imovel.create({
    data: {
      nome: nomes[0],
      gestorId,
      cep: '01234561',
      endereco: ruas[0],
      cidade: 'São Paulo',
      bairro: bairros[0],
      numero: '110',
      uf: 'SP',
      complemento: 'Em frente ao banco',
      quantidadeMoradias: 18,
    },
  });
}

async function main() {
  // Admin
  await upsertUser({
    name: 'Admin Condy',
    email: 'admin@condy.com.br',
    password: 'Teste123',
    cpfCnpj: '60185344000144',
    whatsapp: '11900000000',
    userType: 'ADMIN_PLATAFORMA',
    status: 'ATIVO',
  });

  // Prestador
  await upsertUser({
    name: 'Prestador Jovaldo',
    email: 'prestador@email.com',
    password: 'Teste123',
    userType: 'PRESTADOR',
    cpfCnpj: '06676429195',
    whatsapp: '11987624120',
    dataNascimento: '1985-05-15'
  });

  // Síndico (profissional conforme payload)
  const sindico = await upsertUser({
    name: 'Lucas Souza Mezabarba',
    email: 'lucas.teste@email.com',
    password: 'Teste123',
    userType: 'SINDICO_PROFISSIONAL',
    cpfCnpj: '31323369000169',
    whatsapp: '11987624121',
    dataNascimento: '1985-05-15',
    periodoMandatoInicio: '2024-01-01',
    periodoMandatoFim: '2025-12-31'
  });

  await createImovelParaGestor(sindico.id);

  console.log('Seed concluído com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


