import { FastifyRequest, FastifyReply } from 'fastify';

import { HttpPayload } from '.';
import { Prisma } from '../../../config/prisma';

const createSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const {
      week,
      date,
      weekAvailable,
    }: HttpPayload = req.body as HttpPayload;

    if (!week || !weekAvailable || !date) {
      throw new Error('Missing required fields');
    }

    const existsSchedule = await Prisma.weekSchedule.count({
      where: {
        date,
      },
    });

    if (existsSchedule >= 1) {
      throw new Error('Schedule already exists');
    }

    const weekSchedule = await Prisma.weekSchedule.create({
      data: {
        date,
        mondayRecord: `${week.monday}`,
        tuesdayRecord: `${week.tuesday}`,
        wednesdayRecord: `${week.wednesday}`,
        thursdayRecord: `${week.thursday}`,
        fridayRecord: `${week.friday}`,
        mondayRecordAvailable: `${weekAvailable.monday}`,
        tuesdayRecordAvailable: `${weekAvailable.tuesday}`,
        wednesdayRecordAvailable: `${weekAvailable.wednesday}`,
        thursdayRecordAvailable: `${weekAvailable.thursday}`,
        fridayRecordAvailable: `${weekAvailable.friday}`,
      },
    });

    if (!weekSchedule) {
      throw new Error('Failed to create schedule');
    }

    const data = await Prisma.dentistSchedule.create({
      data: {
        weekId: weekSchedule.id,
      },
    });

    if (!data) {
      throw new Error('Could not create schedule');
    }

    return reply.code(201).send({ success: true, data });
  } catch (error: any) {
    console.log(error);
    return reply.code(404).send({ success: false, message: error.message });
  }
};

export { createSchedule };
