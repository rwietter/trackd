/*
  Warnings:

  - You are about to drop the column `day` on the `dentist_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `dentist_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `dentist_schedule` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "dentist_schedule" DROP CONSTRAINT "dentist_schedule_week_id_fkey";

-- AlterTable
ALTER TABLE "dentist_schedule" DROP COLUMN "day",
DROP COLUMN "month",
DROP COLUMN "year";

-- AddForeignKey
ALTER TABLE "dentist_schedule" ADD CONSTRAINT "dentist_schedule_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "week_schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
