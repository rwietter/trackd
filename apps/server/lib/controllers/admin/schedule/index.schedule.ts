/* eslint-disable consistent-return */
import { FastifyReply, FastifyRequest } from 'fastify';
import { Kaboom, normalizeSchedule } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const indexSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { isoWeek, isoYear } = req.query as { isoWeek: string, isoYear: string };

    if (!isoWeek || !isoYear) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const schedule = await Prisma.weekSchedule.findFirst({
      where: {
        isoWeek: String(isoWeek),
        isoYear: String(isoYear),
      },
    });

    if (!schedule) {
      throw new Error('ERR_SCHEDULE_DATA_NOT_FOUND');
    }

    const normalizedSchedule = normalizeSchedule(schedule);

    return reply.code(200).send({
      name: 'SUCCESS_SCHEDULE_FOUND',
      ok: true,
      id: schedule.id,
      payload: {
        ...normalizedSchedule,
      },
    });
  } catch (error: any) {
    return reply.code(400).send(new Kaboom(error));
  }
};

export { indexSchedule };
