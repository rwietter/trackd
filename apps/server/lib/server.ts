import { app } from "./app";

const PORT = Number(process.env.PORT) || 8396;

const start = async () => {
  try {
    const response = await app.listen({ port: PORT }) as unknown as Promise<string>;
    console.log(`Yup!!!! Server running at ${response}`);
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
