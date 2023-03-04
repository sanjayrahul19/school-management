import { Student } from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const searchStudent = async (req, res) => {
  try {
    const student = await Student.find({
      name: { $regex: req.body.name, $options: "i" },
    }).populate("class school_name",{class_name:1}).populate("school_name");
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
