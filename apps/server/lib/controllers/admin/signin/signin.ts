import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from 'fastify';
import JWT from 'jsonwebtoken';

import { JwtPayload } from '.';
import { Prisma } from '../../../config/prisma';
import { error } from '../../../helpers/error/error';
import { success } from '../../../helpers/success/success';

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
      return reply.status(404).send({
        ...error({
          name: 'ERR_USER_OR_PASSWORD_NOT_FOUND',
          status: 404,
        }),
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return reply.status(404).send({
        ...error({
          name: 'ERR_INVALID_PASSWORD',
          status: 404,
        }),
      });
    }

    const payload = {
      iss: 'awscare',
      sub: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: user.id,
      },
    };

    const jwtToken = await generate(payload);

    return reply.status(200).send({
      ...success({
        name: 'SUCCESS_USER_SIGNIN',
        status: 200,
        hasError: false,
        payload: {
          token: jwtToken,
        },
      }),
    });
  } catch (errorObj: any) {
    return reply.status(400).send({
      ...error({
        name: errorObj.message,
        status: 400,
        hasError: true,
      }),
    });
  }
};

export { signIn };
