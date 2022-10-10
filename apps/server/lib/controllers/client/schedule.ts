import { FastifyRequest, FastifyReply } from 'fastify';

import { Prisma } from '../../config/prisma';

const scheduleController = async (req: FastifyRequest, reply: FastifyReply) => {
  const data = await Prisma.dentistSchedule.findFirst({
    include: {
      week: true,
    },
  });

  return reply.send({ ...data });
};

export default scheduleController;
