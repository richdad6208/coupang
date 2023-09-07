import express, { Request, Response } from "express";
import "dotenv/config";
import "./db";

const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`SERVER ON💚 in port: ${port}`);
});
