import dotenv from "dotenv";
import express from "express";

import type { Request, Response } from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8001;

app.get("/api/v1/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
