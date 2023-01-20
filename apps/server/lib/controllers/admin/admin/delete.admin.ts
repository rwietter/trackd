import { FastifyRequest, FastifyReply } from 'fastify';
import { Kaboom } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const deleteAdmin = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { authorization } = req.headers as any;
    const { id } = req.query as any;

    if (!authorization || !id) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const admin = await Prisma.admin.delete({
      where: {
        id,
      },
    });

    if (!admin) {
      throw new Error('ERR_SCHEDULE_ALREADY_EXISTS');
    }

    return res.status(200).send({
      message: 'Admin deleted successfully',
    });
  } catch (error: any) {
    return res.status(404).send(new Kaboom(error));
  }
};

export { deleteAdmin };
