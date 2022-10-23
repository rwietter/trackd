/*
  Warnings:

  - You are about to drop the column `date` on the `week_schedule` table. All the data in the column will be lost.
  - Added the required column `iso_week` to the `week_schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iso_year` to the `week_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "week_schedule_date_key";

-- AlterTable
ALTER TABLE "week_schedule" DROP COLUMN "date",
ADD COLUMN     "iso_week" TEXT NOT NULL,
ADD COLUMN     "iso_year" TEXT NOT NULL;
