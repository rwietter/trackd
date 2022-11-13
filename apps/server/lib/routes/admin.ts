/* eslint-disable global-require */
import { FastifyInstance } from 'fastify';

import { createSchedule, indexSchedule, deleteSchedule } from '../controllers/admin/schedule';
import { signIn as SigninController } from '../controllers/admin/signin';
import { signUp as signUpController } from '../controllers/admin/signup';
import { authentication } from '../middlewares/authentication';

/**
 * Admin routes
 */

const adminRoutes = async (app: FastifyInstance) => {
  app.get('/schedule', indexSchedule);

  app.post('/admin/signup', signUpController);

  app.post('/admin/signin', SigninController);

  app.post('/admin/create-schedule', { preHandler: authentication }, createSchedule);

  app.delete('/admin/delete-schedule', { preHandler: authentication }, deleteSchedule);
};

export default adminRoutes;
