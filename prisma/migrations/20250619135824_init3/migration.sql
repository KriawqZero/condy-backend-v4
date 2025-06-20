/*
  Warnings:

  - You are about to drop the column `areasComunsId` on the `anexos` table. All the data in the column will be lost.
  - You are about to drop the column `ativoId` on the `anexos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade_moradias` on the `imoveis` table. All the data in the column will be lost.
  - Added the required column `awsKey` to the `anexos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidadeMoradias` to the `imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anexos" DROP CONSTRAINT "anexos_areasComunsId_fkey";

-- DropForeignKey
ALTER TABLE "anexos" DROP CONSTRAINT "anexos_ativoId_fkey";

-- DropForeignKey
ALTER TABLE "anexos" DROP CONSTRAINT "anexos_chamadoId_fkey";

-- AlterTable
ALTER TABLE "anexos" DROP COLUMN "areasComunsId",
DROP COLUMN "ativoId",
ADD COLUMN     "awsKey" TEXT NOT NULL,
ALTER COLUMN "chamadoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "chamados" ADD COLUMN     "valorEstimado" DECIMAL(10,2);

-- AlterTable
ALTER TABLE "imoveis" DROP COLUMN "quantidade_moradias",
ADD COLUMN     "quantidadeMoradias" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "chamados"("id") ON DELETE SET NULL ON UPDATE CASCADE;
