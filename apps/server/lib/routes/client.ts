import { FastifyInstance } from 'fastify';

import scheduleController from '../controllers/client/schedule';

/**
 * Client routes
 */

const clientRoutes = async (app: FastifyInstance) => {
  app.get('/week-schedule', scheduleController);
};

export default clientRoutes;
