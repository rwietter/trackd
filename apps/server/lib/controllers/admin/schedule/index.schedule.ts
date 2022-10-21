import { FastifyReply, FastifyRequest } from 'fastify';
import { Kaboom, success, normalizeSchedule } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const indexSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { date } = req.query as { date: string };

    if (!date) {
      throw new Error('Missing required date field');
    }

    const schedule = await Prisma.weekSchedule.findFirst({
      where: {
        date,
      },
    });

    if (!schedule) {
      return reply
        .status(404)
        .send({
          ...Kaboom(
            { name: 'ERR_SCHEDULE_DATA_NOT_FOUND', status: 404 },
          ),
        });
    }

    const normalizedSchedule = normalizeSchedule(schedule);

    return reply.code(200).send({
      ...success({
        name: 'SUCCESS_SCHEDULE_FOUND',
        status: 200,
        payload: {
          ...normalizedSchedule,
        },
      }),
    });
  } catch (_err) {
    return reply.code(404).send({
      ...Kaboom({
        name: 'ERR_SCHEDULE_DATA_NOT_FOUND',
        status: 404,
      }),
    });
  }
};

export { indexSchedule };
