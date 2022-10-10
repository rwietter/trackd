import { app } from "./app";

const PORT = Number(process.env.PORT) || 8396;

const start = async () => {
  try {
    await app.listen({ port: PORT, host: `127.0.0.1` });
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
