import express, { Request, Response } from "express";
import "dotenv/config";
import "./db";
import morgan from "morgan";
import path from "path";

const app = express();
const port: number = 4000;

app.listen(port, () => {
  console.log(`SERVER ON💚 in port: ${port}`);
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("hi");
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

app.post("/api", (req: Request, res: Response) => {
  res.status(200).json({ success: true, name: "good" });
});
