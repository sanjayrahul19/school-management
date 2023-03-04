import { Student } from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const getAllStudent = async (req, res) => {
  try {
    const student = await Student.find({})
      .populate("class school_name", { class_name: 1 })
      .populate("school_name");
    return responseHandler(
      res,
      200,
      "Student details sent successfully",
      student
    );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
