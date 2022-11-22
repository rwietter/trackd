import type { FastifyRequest, FastifyReply } from 'fastify';

import { Kaboom } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

type Edit = {
  week: {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
  },
  weekAvailable: {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
  },
  isoWeek: string,
  isoYear: string,
  id: string,
}

const editSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const {
      week,
      isoWeek,
      isoYear,
      weekAvailable,
      id,
    } = req.body as Edit;

    if (!week || !weekAvailable || !isoWeek || !isoYear || !id) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const editedSchedule = await Prisma.weekSchedule.update({
      where: {
        id,
      },
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

    if (!editedSchedule) {
      throw new Error('ERR_FAILED_TO_EDIT_SCHEDULE');
    }

    return reply.code(201).send({ ok: true });
  } catch (error: any) {
    return reply.code(404).send(new Kaboom(error));
  }
};

export { editSchedule };
