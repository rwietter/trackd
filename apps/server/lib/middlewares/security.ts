import { FastifyCorsOptions } from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import frameguard from 'frameguard';
import xXssProtection from 'x-xss-protection';

/**
 * Security middlewares
 */

export const corsOptions: FastifyCorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  maxAge: 86400,
  hideOptionsRoute: true,
};

const securityMiddleware = async (app: FastifyInstance) => {
  try {
    app.use(frameguard());
    app.use(xXssProtection());
  } catch (error: any) {
    app.log.error(error.message);
    process.exit(1);
  }
  return true;
};

export { securityMiddleware };
