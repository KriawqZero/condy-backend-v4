-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('SINDICO_RESIDENTE', 'SINDICO_PROFISSIONAL', 'ADMIN_IMOVEIS', 'PRESTADOR', 'ADMIN_PLATAFORMA');

-- CreateEnum
CREATE TYPE "RegimeTributario" AS ENUM ('SIMPLES', 'LUCRO_PRESUMIDO', 'LUCRO_REAL');

-- CreateEnum
CREATE TYPE "ChamadoStatus" AS ENUM ('NOVO', 'EM_ATENDIMENTO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "Prioridade" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "Escopo" AS ENUM ('ORCAMENTO', 'SERVICO_IMEDIATO');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL,
    "data_nascimento" TIMESTAMP(3),
    "email_pessoal" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "periodo_mandato_inicio" TIMESTAMP(3),
    "periodo_mandato_fim" TIMESTAMP(3),
    "subsindico_info" JSONB,
    "nome_fantasia" TEXT,
    "razao_social" TEXT,
    "responsavel_empresa" TEXT,
    "cep" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "segmentos_atuacao" TEXT[],
    "regime_tributario" "RegimeTributario",

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imoveis" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "regime_tributario" "RegimeTributario" NOT NULL DEFAULT 'SIMPLES',
    "quantidade_moradias" INTEGER NOT NULL,
    "areas_comuns" TEXT[],
    "estatuto_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "gestor_id" INTEGER NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ativos" (
    "id" SERIAL NOT NULL,
    "asset_code" TEXT NOT NULL,
    "descricao_ativo" TEXT NOT NULL,
    "local_instalacao" TEXT NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "data_instalacao" TIMESTAMP(3),
    "valor_compra" DECIMAL(10,2),
    "garantia" BOOLEAN NOT NULL DEFAULT false,
    "garantia_validade" TIMESTAMP(3),
    "garantia_fornecedor_info" JSONB,
    "contrato_manutencao" BOOLEAN NOT NULL DEFAULT false,
    "contrato_validade" TIMESTAMP(3),
    "contrato_fornecedor_info" JSONB,
    "relatorio_fotografico_urls" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "imovel_id" INTEGER NOT NULL,

    CONSTRAINT "ativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chamados" (
    "id" SERIAL NOT NULL,
    "numero_chamado" TEXT NOT NULL,
    "descricao_ocorrido" TEXT NOT NULL,
    "fotos_videos_urls" TEXT[],
    "informacoes_adicionais" TEXT,
    "prioridade" "Prioridade" NOT NULL,
    "escopo" "Escopo" NOT NULL,
    "status" "ChamadoStatus" NOT NULL DEFAULT 'NOVO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "imovel_id" INTEGER NOT NULL,
    "ativo_id" INTEGER,
    "solicitante_id" INTEGER NOT NULL,
    "assigned_provider_id" INTEGER,

    CONSTRAINT "chamados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_cnpj_key" ON "users"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_whatsapp_key" ON "users"("whatsapp");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "imoveis_cnpj_key" ON "imoveis"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "ativos_asset_code_key" ON "ativos"("asset_code");

-- CreateIndex
CREATE UNIQUE INDEX "chamados_numero_chamado_key" ON "chamados"("numero_chamado");

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_gestor_id_fkey" FOREIGN KEY ("gestor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_imovel_id_fkey" FOREIGN KEY ("imovel_id") REFERENCES "imoveis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_imovel_id_fkey" FOREIGN KEY ("imovel_id") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_ativo_id_fkey" FOREIGN KEY ("ativo_id") REFERENCES "ativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_solicitante_id_fkey" FOREIGN KEY ("solicitante_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_assigned_provider_id_fkey" FOREIGN KEY ("assigned_provider_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
