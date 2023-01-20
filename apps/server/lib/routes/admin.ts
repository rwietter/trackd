/* eslint-disable global-require */
import type { FastifyInstance } from 'fastify';
import { editAdmin, indexAdmin, deleteAdmin } from '../controllers/admin/admin';

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

  app.get('/admin', { preHandler: authentication }, indexAdmin);
  app.put('/admin', { preHandler: authentication }, editAdmin);
  app.delete('/admin', { preHandler: authentication }, deleteAdmin);

  app.post('/admin/create-schedule', { preHandler: authentication }, createSchedule);

  app.delete('/admin/delete-schedule', { preHandler: authentication }, deleteSchedule);

  app.put('/admin/edit-schedule', { preHandler: authentication }, editSchedule);
};

export default adminRoutes;
