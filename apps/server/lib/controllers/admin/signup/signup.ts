/* eslint-disable complexity */
import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Kaboom } from '../../../helpers';

import { UserData } from '.';
import { Prisma } from '../../../config/prisma';

const signUp = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password, name } = req.body as UserData;

    if (!email || !password || !name) {
      throw new Error('ERR_PROVIDE_EMAIL_AND_PASSWORD');
    }

    const userExists = await Prisma.admin.findUnique({ where: { email } });
    if (userExists) {
      throw new Error('ERR_USER_ALREADY_EXISTS');
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
      throw new Error('ERR_USER_NOT_FOUND');
    }

    return reply.status(201).send({
      name: 'SUCCESS_USER_CREATED',
      ok: true,
    });
  } catch (error: any) {
    return reply.code(400).send(new Kaboom(error));
  }
};

export { signUp };
