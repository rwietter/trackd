/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import { FastifyReply, FastifyRequest } from 'fastify';
import { error, success } from '../../../helpers';
import { normalizeSchedule } from '../../../helpers/normalize/group-data-schedule';
import { Prisma } from '../../../config/prisma';

const indexSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    // const { date } = req.params as { date: string };

    const date = new Date('2022-10-21');

    const [schedule]: any = await Prisma
      .$queryRaw`
      SELECT * FROM dentist_schedule
      JOIN week_schedule
      ON dentist_schedule.week_id = week_schedule.id
      WHERE DATE(dentist_schedule.created_at) = ${date}`;

    if (!schedule) {
      return reply
        .status(404)
        .send(error(
          { name: 'ERR_SCHEDULE_DATA_NOT_FOUND', status: 404 },
        ));
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
      ...error({
        name: 'ERR_SCHEDULE_DATA_NOT_FOUND',
        status: 404,
      }),
    });
  }
};

export { indexSchedule };
