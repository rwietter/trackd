import { FastifyInstance } from 'fastify';
import plugin from 'fastify-plugin';

/**
 * This plugins adds some utilities to handle http errors
 * @see https://github.com/fastify/fastify-sensible
 */

export default plugin(async (app: FastifyInstance) => {
  try {
    await app.register(import('@fastify/sensible'));
  } catch (error: any) {
    app.log.error(error.message);
    process.exit(1);
  }
  return true;
});
