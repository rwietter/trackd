import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from 'fastify';
import JWT from 'jsonwebtoken';
import { Kaboom } from '../../../helpers';

import { JwtPayload } from '.';
import { Prisma } from '../../../config/prisma';

const generate = (payload: JwtPayload) => new Promise((resolve) => {
  JWT.sign(
    payload,
    String(process.env.SECRET_JWT_KEY),
    (err, token) => {
      if (err) {
        throw new Error('ERR_INVALID_TOKEN');
      }
      resolve(token);
    },
  );
});

const signIn = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = await req.body as { email: string; password: string };

    const user = await Prisma.admin.findUnique({ where: { email } });

    if (!user || user.email !== email) {
      throw new Error('ERR_USER_OR_PASSWORD_NOT_FOUND');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('ERR_INVALID_PASSWORD');
    }

    const payload = {
      iss: 'daydent',
      sub: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: user.id,
      },
    };

    const jwtToken = await generate(payload);

    return reply.status(200).send({
      name: 'SUCCESS_USER_SIGNIN',
      ok: true,
      payload: {
        token: jwtToken,
      },
    });
  } catch (error: any) {
    return reply.code(400).send(new Kaboom(error));
  }
};

export { signIn };
