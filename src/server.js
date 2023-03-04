import express from "express";
import { connectDB } from "./config/db";
import { router } from "./router/router";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

connectDB();

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is up and running");
});
