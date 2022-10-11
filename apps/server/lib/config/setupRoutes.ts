import autoload from '@fastify/autoload';
import { FastifyInstance } from 'fastify';
import path from 'path';

const setupRoutes = (app: FastifyInstance) => {
  app.register(autoload, {
    dir: path.join(__dirname, '..', 'routes'),
  });
};

export { setupRoutes };
