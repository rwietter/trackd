import { FastifyRequest, FastifyReply } from 'fastify';

import { Kaboom } from '../../../helpers';
import { HttpPayload } from './types';
import { Prisma } from '../../../config/prisma';

const createSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const {
      week,
      isoWeek,
      isoYear,
      weekAvailable,
    }: HttpPayload = req.body as HttpPayload;

    if (!week || !weekAvailable || !isoWeek || !isoYear) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const existsSchedule = await Prisma.weekSchedule.count({
      where: {
        isoWeek: String(isoWeek),
        isoYear: String(isoYear),
      },
    });

    if (existsSchedule >= 1) {
      throw new Error('ERR_SCHEDULE_ALREADY_EXISTS');
    }

    const weekSchedule = await Prisma.weekSchedule.create({
      data: {
        isoWeek,
        isoYear,
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
      throw new Error('ERR_FAILED_TO_CREATE_SCHEDULE');
    }

    const data = await Prisma.dentistSchedule.create({
      data: {
        weekId: weekSchedule.id,
      },
    });

    if (!data) {
      throw new Error('ERR_COULD_NOT_CREATE_SCHEDULE');
    }

    return reply.code(201).send({ ok: true });
  } catch (error: any) {
    return reply.code(404).send(new Kaboom(error));
  }
};

export { createSchedule };
