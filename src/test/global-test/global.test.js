import mongoose from "mongoose";
import { describe } from "mocha";
import { schoolCreation } from "../school/school-creation";
import { schoolDelete } from "../school/school-delete";
import { schoolUpdate } from "../school/school-update";
import { schoolDetail } from "../school/school-detail";
import { schoolDetails } from "../school/school-details";

const MONGO_URI = "mongodb://localhost:27017/School_Management_Test";

before(async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

after(async () => {
  await mongoose.connection.close();
});

describe("To check mentor api", () => {
  describe("signup", schoolCreation);
  describe("delete", schoolDelete);
  describe("update", schoolUpdate);
  describe("detail", schoolDetail);
  describe("details", schoolDetails);
});
