import { FastifyRequest, FastifyReply } from 'fastify';

import JWT from 'jsonwebtoken';
import { Kaboom } from '../../../helpers';
import { Prisma } from '../../../config/prisma';

const decryptOauth = async (token: string) => {
  const decodedToken = JWT.verify(token, String(process.env.SECRET_JWT_KEY), (err, decoded) => {
    if (err) {
      throw new Error('ERR_INVALID_TOKEN');
    }
    return decoded;
  });
  return decodedToken;
};

type Payload = {
  data: {
    userId: string;
  }
};

const indexAdmin = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { authorization } = req.headers as any;

    const token = authorization.split(' ')[1].trim();

    const { data }: Payload = await decryptOauth(token) as unknown as Payload;

    if (!data.userId) {
      throw new Error('ERR_MISSING_REQUIRED_FIELDS');
    }

    const admin = await Prisma.admin.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!admin) {
      throw new Error('ERR_SCHEDULE_ALREADY_EXISTS');
    }

    return reply.code(201).send({
      name: admin.name,
      username: admin.username,
      work: admin.work,
      city: admin.city,
      state: admin.state,
      country: admin.country,
      phone: admin.phone,
      email: admin.email,
      updatedAt: admin.updatedAt,
      id: admin.id,
    });
  } catch (error: any) {
    return reply.code(404).send(new Kaboom(error));
  }
};

export { indexAdmin };
