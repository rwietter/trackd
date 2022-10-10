import autoload from "@fastify/autoload";
import { FastifyInstance } from 'fastify';
import path from "path";

const setupPlugins = (app: FastifyInstance) => {
  app.register(autoload, {
    dir: path.join(__dirname, `..`, `plugins`),
  });
};

export { setupPlugins };
