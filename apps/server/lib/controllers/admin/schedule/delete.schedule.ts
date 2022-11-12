import { FastifyRequest, FastifyReply } from 'fastify';

import { Kaboom } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const deleteSchedule = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.query as { id: string };

    if (!id) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const deletedSchedule = await Prisma.weekSchedule.delete({
      where: {
        id,
      },
    });

    if (!deletedSchedule) {
      throw new Error('ERR_FAILED_TO_DELETE_SCHEDULE');
    }

    return reply.code(201).send({ ok: true });
  } catch (error: any) {
    return reply.code(404).send(new Kaboom(error));
  }
};

export { deleteSchedule };
