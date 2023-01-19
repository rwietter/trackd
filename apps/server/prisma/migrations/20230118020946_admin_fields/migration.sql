/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");
