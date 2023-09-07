import mongoose from "mongoose";
import { env } from "node:process";

main().catch((err) => console.log(err));

async function main() {
  if (typeof env.DB_URL === "string") await mongoose.connect(env.DB_URL);
  console.log("DB ON 💚");
}
