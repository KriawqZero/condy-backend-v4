/*
  Warnings:

  - You are about to drop the column `assignedProviderId` on the `chamados` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chamados" DROP CONSTRAINT "chamados_assignedProviderId_fkey";

-- AlterTable
ALTER TABLE "chamados" DROP COLUMN "assignedProviderId",
ADD COLUMN     "prestadorAssignadoId" TEXT,
ALTER COLUMN "prioridade" SET DEFAULT 'MEDIA',
ALTER COLUMN "escopo" SET DEFAULT 'ORCAMENTO';

-- AlterTable
ALTER TABLE "imoveis" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT,
ADD COLUMN     "numero" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_prestadorAssignadoId_fkey" FOREIGN KEY ("prestadorAssignadoId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
