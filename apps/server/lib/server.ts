import { app } from './app';

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const start = async () => {
  try {
    await app.listen({ port: PORT, host: HOST }) as unknown as string;
  } catch (err) {
    process.exit(1);
  }
};

start();
