/* eslint-disable global-require */
import type { FastifyInstance } from 'fastify';

import {
  createSchedule, indexSchedule, deleteSchedule, editSchedule,
} from '../controllers/admin/schedule';
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

  app.put('/admin/edit-schedule', { preHandler: authentication }, editSchedule);
};

export default adminRoutes;
