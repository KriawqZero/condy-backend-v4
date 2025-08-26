-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('SINDICO_RESIDENTE', 'SINDICO_PROFISSIONAL', 'EMPRESA', 'PRESTADOR', 'ADMIN_PLATAFORMA');

-- CreateEnum
CREATE TYPE "public"."ChamadoStatus" AS ENUM ('NOVO', 'A_CAMINHO', 'EM_ATENDIMENTO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "public"."PropostaStatus" AS ENUM ('PROPOSTA_ENVIADA', 'PROPOSTA_ACEITA', 'PROPOSTA_RECUSADA', 'CONTRAPROPOSTA_ENVIADA', 'CONTRAPROPOSTA_APROVADA', 'CONTRAPROPOSTA_RECUSADA');

-- CreateEnum
CREATE TYPE "public"."OrdemServicoStatus" AS ENUM ('EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "public"."Prioridade" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "public"."Escopo" AS ENUM ('ORCAMENTO', 'SERVICO_IMEDIATO');

-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('ATIVO', 'INATIVO', 'BLOQUEADO', 'PENDENTE', 'FALTA_DOCUMENTOS');

-- CreateTable
CREATE TABLE "public"."aceito_termos" (
    "id" SERIAL NOT NULL,
    "termoUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aceito_termos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "public"."UserType" NOT NULL,
    "dataNascimento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "public"."UserStatus" NOT NULL DEFAULT 'PENDENTE',
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
CREATE TABLE "public"."imoveis" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "gestorId" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "complemento" TEXT,
    "quantidadeMoradias" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."areas_comuns" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "areas_comuns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ativos" (
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
CREATE TABLE "public"."chamados" (
    "id" SERIAL NOT NULL,
    "numeroChamado" TEXT NOT NULL,
    "descricaoOcorrido" TEXT NOT NULL,
    "valorEstimado" DECIMAL(10,2),
    "informacoesAdicionais" TEXT,
    "prioridade" "public"."Prioridade" NOT NULL DEFAULT 'MEDIA',
    "escopo" "public"."Escopo" NOT NULL DEFAULT 'ORCAMENTO',
    "status" "public"."ChamadoStatus" NOT NULL DEFAULT 'NOVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER NOT NULL,
    "ativoId" INTEGER,
    "solicitanteId" TEXT NOT NULL,
    "prestadorAssignadoId" TEXT,

    CONSTRAINT "chamados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."propostas_servico" (
    "id" SERIAL NOT NULL,
    "chamadoId" INTEGER NOT NULL,
    "prestadorId" TEXT NOT NULL,
    "precoSugeridoMin" DECIMAL(10,2),
    "precoSugeridoMax" DECIMAL(10,2),
    "prazoSugerido" INTEGER,
    "status" "public"."PropostaStatus" NOT NULL DEFAULT 'PROPOSTA_ENVIADA',
    "contrapropostaPrecoMin" DECIMAL(10,2),
    "contrapropostaPrecoMax" DECIMAL(10,2),
    "contrapropostaPrazo" INTEGER,
    "contrapropostaJustificativa" TEXT,
    "recusaJustificativa" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "propostas_servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ordens_servico" (
    "id" SERIAL NOT NULL,
    "chamadoId" INTEGER NOT NULL,
    "prestadorId" TEXT NOT NULL,
    "valorAcordado" DECIMAL(10,2),
    "prazoAcordado" INTEGER,
    "status" "public"."OrdemServicoStatus" NOT NULL DEFAULT 'EM_ANDAMENTO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ordens_servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."audit_logs" (
    "id" SERIAL NOT NULL,
    "actorId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."anexos" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "awsKey" TEXT NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chamadoId" INTEGER,

    CONSTRAINT "anexos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpfCnpj_key" ON "public"."users"("cpfCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_whatsapp_key" ON "public"."users"("whatsapp");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ativos_assetCode_key" ON "public"."ativos"("assetCode");

-- CreateIndex
CREATE UNIQUE INDEX "chamados_numeroChamado_key" ON "public"."chamados"("numeroChamado");

-- CreateIndex
CREATE UNIQUE INDEX "propostas_servico_chamadoId_prestadorId_key" ON "public"."propostas_servico"("chamadoId", "prestadorId");

-- CreateIndex
CREATE UNIQUE INDEX "ordens_servico_chamadoId_key" ON "public"."ordens_servico"("chamadoId");

-- CreateIndex
CREATE UNIQUE INDEX "anexos_url_key" ON "public"."anexos"("url");

-- AddForeignKey
ALTER TABLE "public"."aceito_termos" ADD CONSTRAINT "aceito_termos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."imoveis" ADD CONSTRAINT "imoveis_gestorId_fkey" FOREIGN KEY ("gestorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."areas_comuns" ADD CONSTRAINT "areas_comuns_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "public"."imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ativos" ADD CONSTRAINT "ativos_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "public"."imoveis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chamados" ADD CONSTRAINT "chamados_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "public"."imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chamados" ADD CONSTRAINT "chamados_ativoId_fkey" FOREIGN KEY ("ativoId") REFERENCES "public"."ativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chamados" ADD CONSTRAINT "chamados_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chamados" ADD CONSTRAINT "chamados_prestadorAssignadoId_fkey" FOREIGN KEY ("prestadorAssignadoId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."propostas_servico" ADD CONSTRAINT "propostas_servico_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "public"."chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."propostas_servico" ADD CONSTRAINT "propostas_servico_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ordens_servico" ADD CONSTRAINT "ordens_servico_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "public"."chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ordens_servico" ADD CONSTRAINT "ordens_servico_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."audit_logs" ADD CONSTRAINT "audit_logs_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."anexos" ADD CONSTRAINT "anexos_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "public"."chamados"("id") ON DELETE SET NULL ON UPDATE CASCADE;
