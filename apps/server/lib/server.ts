import { app } from "./app";

const PORT = Number(process.env.PORT) || 3000;
const HOST = `0.0.0.0`;

const start = async () => {
  try {
    const response = await app.listen(
      { port: PORT, host: HOST },
    ) as unknown as Promise<string>;
    console.log(`Yup!!!! Server running at ${response}`);
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
