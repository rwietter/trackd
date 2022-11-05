/* eslint-disable import/no-unresolved */
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import type { FastifyInstance } from 'fastify';
import { Prisma } from './prisma';

const makeSentry = (app: FastifyInstance) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    release: 'trackd@1.2.3',
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.RequestData(),
      new Tracing.Integrations.BrowserTracing(),
      new Tracing.Integrations.Prisma({ client: Prisma }),
    ],
  });

  app.addHook('onError', (request, reply, error, done) => {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error);
    }
    done();
  });
};

export { makeSentry };
