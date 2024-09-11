/*
  Warnings:

  - You are about to drop the column `CompressedSize` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `OriginalSize` on the `Video` table. All the data in the column will be lost.
  - Added the required column `compressedSize` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalSize` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "CompressedSize",
DROP COLUMN "OriginalSize",
ADD COLUMN     "compressedSize" TEXT NOT NULL,
ADD COLUMN     "originalSize" TEXT NOT NULL;
