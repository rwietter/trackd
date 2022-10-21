/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `week_schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `week_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "week_schedule" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "week_schedule_date_key" ON "week_schedule"("date");
