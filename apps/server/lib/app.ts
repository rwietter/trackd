import cors from '@fastify/cors';
import middie from '@fastify/middie';
import fastifySwagger from '@fastify/swagger';
import Fastify from 'fastify';
import path from 'path';

import { setupPlugins } from './config/setupPlugins';
import { setupRoutes } from './config/setupRoutes';
import { corsOptions, securityMiddleware } from './middlewares/security';

import './config/dotenv';

const app = Fastify({ logger: true });

const build = () => {
  // Register Middleware Plugin
  app.register(middie, { hook: `preHandler` });

  // Register cors middleware
  app.register(cors, corsOptions);

  // Register Plugins.
  setupPlugins(app);

  // Register middleware handler.
  app.register(securityMiddleware);

  // Register routes.
  setupRoutes(app);

  // http://127.0.0.1:3000/documentation/static/index.html#/
  app.register(fastifySwagger, {
    mode: `static`,
    specification: {
      path: path.join(__dirname, `config`, `swagger.yaml`),
      baseDir: path.join(__dirname, `config`),
    },
    exposeRoute: true,
    staticCSP: true,
  });

  app.log.info(`⚡️ App listening`);
};

build();

export { app };
