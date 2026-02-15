import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import type { Request, Response } from "express";

dotenv.config();

const PORT = process.env["PORT"];

const app = express();
const corsOption = {
  origin: process.env["FRONTEND_URL"],
  // origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// middleswares
app.use(express.json());
app.use(cors(corsOption));
app.options(/.*/, cors(corsOption));

app.get("/api/v1/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Stocky REST API",
    description:
      "An inventory management web application api for any stock client.",
    author: {
      name: "DripCode Studio",
      link: "https://dripcodestudio.com/",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
