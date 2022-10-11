/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { FastifyReply, FastifyRequest } from 'fastify';
import JWT from 'jsonwebtoken';

const authentication = async (req: FastifyRequest, rep: FastifyReply, next: Function): Promise<void> => {
  try {
    const authorizationToken = req.headers.authorization;

    if (!authorizationToken) {
      throw new Error('ERR_TOKEN_NOT_FOUND');
    }

    const tokenParts = authorizationToken.split(' ');

    if (tokenParts.length !== 2) {
      throw new Error('ERR_INVALID_TOKEN');
    }

    const [scheme, token] = tokenParts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new Error('ERR_INVALID_TOKEN');
    }

    const secretKey = String(process.env.SECRET_JWT_KEY).trim();

    JWT.verify(token, secretKey, (err, decoded: any) => {
      try {
        const userId = decoded?.sub;
        if (err) {
          throw new Error(err.message);
        }
        if (!token) {
          throw new Error(err!.message);
        }
      } catch (error) {
        throw new Error('ERR_EXPIRED_TOKEN');
      }
    });
  } catch (error: any) {
    return rep.code(400).send({ success: false, message: error.message });
  }
};

export { authentication };
