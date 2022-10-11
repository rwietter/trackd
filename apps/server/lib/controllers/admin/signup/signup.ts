/* eslint-disable complexity */
import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from 'fastify';

import { UserData } from '.';
import { Prisma } from '../../../config/prisma';
import { error } from '../../../helpers/error';
import { success } from '../../../helpers/success/success';

const signUp = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password, name } = req.body as UserData;

  // check if password and email and name are provided
  if (!email || !password || !name) {
    return reply
      .status(400)
      .send({
        ...error({
          name: 'ERR_PROVIDE_EMAIL_AND_PASSWORD',
          status: 400,
          hasError: true,
        }),
      });
  }

  const userExists = await Prisma.admin.findUnique({ where: { email } });
  if (userExists) {
    return reply.status(409).send({
      ...error({
        name: 'ERR_USER_ALREADY_EXISTS',
        status: 409,
        hasError: true,
      }),
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  if (!user) {
    return reply.status(500).send({
      ...error({
        name: 'ERR_USER_NOT_FOUND',
        status: 409,
        hasError: true,
      }),
    });
  }

  return reply.status(201).send({
    ...success({
      name: 'SUCCESS_USER_CREATED',
      status: 201,
      hasError: false,
    }),
  });
};

export { signUp };
