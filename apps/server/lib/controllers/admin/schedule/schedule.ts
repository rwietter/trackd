import { FastifyRequest, FastifyReply } from 'fastify';

import { HttpPayload } from '.';
import { Prisma } from '../../../config/prisma';

const createSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const {
      day,
      month,
      year,
      week,
      weekAvailable,
      userId,
    }: HttpPayload = req.body as HttpPayload;

    const weekSchedule = await Prisma.weekSchedule.create({
      data: {
        mondayRecord: week.monday,
        tuesdayRecord: week.tuesday,
        wednesdayRecord: week.wednesday,
        thursdayRecord: week.thursday,
        fridayRecord: week.friday,
        mondayRecordAvailable: weekAvailable.monday,
        tuesdayRecordAvailable: weekAvailable.tuesday,
        wednesdayRecordAvailable: weekAvailable.wednesday,
        thursdayRecordAvailable: weekAvailable.thursday,
        fridayRecordAvailable: weekAvailable.friday,
      },
    });

    const data = await Prisma.dentistSchedule.create({
      data: { day, month, year, weekId: weekSchedule.id },
    });

    return reply.code(201).send({ success: true, data, userId });
  } catch (error: any) {
    return reply.code(404).send({ success: false, error: error.message });
  }
};

export { createSchedule };
