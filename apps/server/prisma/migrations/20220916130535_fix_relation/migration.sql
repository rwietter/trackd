/*
  Warnings:

  - You are about to drop the column `schedule_id` on the `dentist_schedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[week_id]` on the table `dentist_schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `week_id` to the `dentist_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dentist_schedule" DROP CONSTRAINT "dentist_schedule_schedule_id_fkey";

-- AlterTable
ALTER TABLE "dentist_schedule" DROP COLUMN "schedule_id",
ADD COLUMN     "week_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "dentist_schedule_week_id_key" ON "dentist_schedule"("week_id");

-- AddForeignKey
ALTER TABLE "dentist_schedule" ADD CONSTRAINT "dentist_schedule_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "week_schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
