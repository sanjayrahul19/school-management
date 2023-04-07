import express from "express";
import { connectDB } from "./config/db";
import { router } from "./router/router";
import { swagger } from "./swagger/swagger";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

connectDB();

swagger(app);

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is up and running " + PORT);
});

module.exports = app;
