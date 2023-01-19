import { FastifyRequest, FastifyReply } from 'fastify';

import { Kaboom } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const editAdmin = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { authorization } = req.headers as any;
    const { id } = req.query as any;
    const { user } = req.body as any;

    if (!authorization || !id || !user) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const admin = await Prisma.admin.update({
      where: {
        id,
      },
      data: {
        ...user,
      },
    });

    if (!admin) {
      throw new Error('ERR_SCHEDULE_ALREADY_EXISTS');
    }

    return reply.code(201).send({
      message: 'Admin updated successfully',
      user: {
        name: admin.name,
        email: admin.email,
        username: admin.username,
        work: admin.work,
        phone: admin.phone,
        state: admin.state,
        city: admin.city,
        updatedAt: admin.updatedAt,
      },
    });
  } catch (error: any) {
    return reply.code(404).send(new Kaboom(error));
  }
};

export { editAdmin };
