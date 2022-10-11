/* eslint-disable global-require */
import { FastifyInstance } from 'fastify';

import {
  createSchedule as createScheduleController,
} from '../controllers/admin/schedule';
import { signIn as SigninController } from '../controllers/admin/signin';
import { signUp as signUpController } from '../controllers/admin/signup';
import { authentication } from '../middlewares/authentication';

/**
 * Admin routes
 */

const adminRoutes = async (app: FastifyInstance) => {
  app.post('/admin/signup', signUpController);
  app.post('/admin/signin', SigninController);
  app.post('/admin/create-schedule', {
    preHandler: authentication,
  }, createScheduleController);
};

export default adminRoutes;
