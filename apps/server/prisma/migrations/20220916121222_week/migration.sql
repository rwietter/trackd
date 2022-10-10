/*
  Warnings:

  - You are about to drop the column `records` on the `dentist_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `records_available` on the `dentist_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `dentist_schedule` table. All the data in the column will be lost.
  - You are about to drop the `schedule_week` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `schedule_id` to the `dentist_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dentist_schedule" DROP CONSTRAINT "dentist_schedule_scheduleId_fkey";

-- AlterTable
ALTER TABLE "dentist_schedule" DROP COLUMN "records",
DROP COLUMN "records_available",
DROP COLUMN "scheduleId",
ADD COLUMN     "schedule_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "schedule_week";

-- CreateTable
CREATE TABLE "week_schedule" (
    "id" TEXT NOT NULL,
    "monday_record" TEXT NOT NULL DEFAULT '0',
    "monday_record_available" TEXT NOT NULL DEFAULT '0',
    "tuesday_record" TEXT NOT NULL DEFAULT '0',
    "tuesday_record_available" TEXT NOT NULL DEFAULT '0',
    "wednesday_record" TEXT NOT NULL DEFAULT '0',
    "wednesday_record_available" TEXT NOT NULL DEFAULT '0',
    "thursday_record" TEXT NOT NULL DEFAULT '0',
    "thursday_record_available" TEXT NOT NULL DEFAULT '0',
    "friday_record" TEXT NOT NULL DEFAULT '0',
    "friday_record_available" TEXT NOT NULL DEFAULT '0',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "week_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dentist_schedule" ADD CONSTRAINT "dentist_schedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "week_schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
