import { app } from "./app";

const PORT = Number(process.env.PORT) || 8396;

const start = async () => {
  try {
    await app.listen({ port: PORT });
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
