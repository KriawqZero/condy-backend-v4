-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('SINDICO_RESIDENTE', 'SINDICO_PROFISSIONAL', 'ADMIN_IMOVEIS', 'PRESTADOR', 'ADMIN_PLATAFORMA');

-- CreateEnum
CREATE TYPE "ChamadoStatus" AS ENUM ('NOVO', 'A_CAMINHO', 'EM_ATENDIMENTO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "Prioridade" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "Escopo" AS ENUM ('ORCAMENTO', 'SERVICO_IMEDIATO');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ATIVO', 'INATIVO', 'BLOQUEADO', 'PENDENTE', 'FALTA_DOCUMENTOS');

-- CreateTable
CREATE TABLE "aceito_termos" (
    "id" SERIAL NOT NULL,
    "termoUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aceito_termos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,
    "dataNascimento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'PENDENTE',
    "periodoMandatoInicio" TIMESTAMP(3),
    "periodoMandatoFim" TIMESTAMP(3),
    "subsindicoInfo" JSONB,
    "nomeFantasia" TEXT,
    "razaoSocial" TEXT,
    "cep" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "uf" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imoveis" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "quantidade_moradias" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gestorId" INTEGER NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas_comuns" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "areas_comuns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ativos" (
    "id" SERIAL NOT NULL,
    "assetCode" TEXT NOT NULL,
    "descricaoAtivo" TEXT NOT NULL,
    "localInstalacao" TEXT NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "dataInstalacao" TIMESTAMP(3),
    "valorCompra" DECIMAL(10,2),
    "garantia" BOOLEAN NOT NULL DEFAULT false,
    "garantiaValidade" TIMESTAMP(3),
    "contratoManutencao" BOOLEAN NOT NULL DEFAULT false,
    "contratoValidade" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "ativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chamados" (
    "id" SERIAL NOT NULL,
    "numeroChamado" TEXT NOT NULL,
    "descricaoOcorrido" TEXT NOT NULL,
    "informacoesAdicionais" TEXT,
    "prioridade" "Prioridade" NOT NULL,
    "escopo" "Escopo" NOT NULL,
    "status" "ChamadoStatus" NOT NULL DEFAULT 'NOVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER NOT NULL,
    "ativoId" INTEGER,
    "solicitanteId" INTEGER NOT NULL,
    "assignedProviderId" INTEGER,

    CONSTRAINT "chamados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anexos" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chamadoId" INTEGER NOT NULL,
    "ativoId" INTEGER,
    "areasComunsId" INTEGER,

    CONSTRAINT "anexos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpfCnpj_key" ON "users"("cpfCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_whatsapp_key" ON "users"("whatsapp");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ativos_assetCode_key" ON "ativos"("assetCode");

-- CreateIndex
CREATE UNIQUE INDEX "chamados_numeroChamado_key" ON "chamados"("numeroChamado");

-- CreateIndex
CREATE UNIQUE INDEX "anexos_url_key" ON "anexos"("url");

-- AddForeignKey
ALTER TABLE "aceito_termos" ADD CONSTRAINT "aceito_termos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_gestorId_fkey" FOREIGN KEY ("gestorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areas_comuns" ADD CONSTRAINT "areas_comuns_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "imoveis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_ativoId_fkey" FOREIGN KEY ("ativoId") REFERENCES "ativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_assignedProviderId_fkey" FOREIGN KEY ("assignedProviderId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_ativoId_fkey" FOREIGN KEY ("ativoId") REFERENCES "ativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_areasComunsId_fkey" FOREIGN KEY ("areasComunsId") REFERENCES "areas_comuns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
