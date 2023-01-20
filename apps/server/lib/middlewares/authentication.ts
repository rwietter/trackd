/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { FastifyReply, FastifyRequest } from 'fastify';
import JWT from 'jsonwebtoken';

const authentication = (req: FastifyRequest, rep: FastifyReply, next: Function) => {
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
          throw new Error('ERR_INVALID_TOKEN');
        }
        if (!token) {
          throw new Error('ERR_INVALID_TOKEN');
        }
      } catch (error) {
        throw new Error('ERR_EXPIRED_TOKEN');
      }
    });
  } catch (error: any) {
    const err = {
      name: error.name,
      message: error.message,
      stack: error.stack,
      isAutenticated: false,
    };
    return rep.code(400).send(err);
  } finally {
    next();
  }
};

export { authentication };
