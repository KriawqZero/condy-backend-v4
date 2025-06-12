/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "aceito_termos" DROP CONSTRAINT "aceito_termos_userId_fkey";

-- DropForeignKey
ALTER TABLE "chamados" DROP CONSTRAINT "chamados_assignedProviderId_fkey";

-- DropForeignKey
ALTER TABLE "chamados" DROP CONSTRAINT "chamados_solicitanteId_fkey";

-- DropForeignKey
ALTER TABLE "imoveis" DROP CONSTRAINT "imoveis_gestorId_fkey";

-- AlterTable
ALTER TABLE "aceito_termos" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "chamados" ALTER COLUMN "solicitanteId" SET DATA TYPE TEXT,
ALTER COLUMN "assignedProviderId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "imoveis" ALTER COLUMN "gestorId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "aceito_termos" ADD CONSTRAINT "aceito_termos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_gestorId_fkey" FOREIGN KEY ("gestorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_assignedProviderId_fkey" FOREIGN KEY ("assignedProviderId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
