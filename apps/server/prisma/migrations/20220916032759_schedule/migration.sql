/*
  Warnings:

  - Added the required column `scheduleId` to the `dentist_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dentist_schedule" ADD COLUMN     "scheduleId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "schedule_week" (
    "id" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_week_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dentist_schedule" ADD CONSTRAINT "dentist_schedule_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule_week"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
