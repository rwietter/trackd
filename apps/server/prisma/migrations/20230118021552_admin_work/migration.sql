/*
  Warnings:

  - Added the required column `work` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "work" TEXT NOT NULL;
