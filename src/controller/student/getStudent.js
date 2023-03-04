import { Student } from "../../model/student";
import { Mentor } from "../../model/mentor";
import { responseHandler } from "../../response/responseHandler";

export const getStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.find({ _id: id })
      .populate("class school_name", { class_name: 1 })
      .populate("school_name");
    const mentor = await Mentor.find({ student: id })
      .populate("subject", { name: 1 })
      .select("-school_name -class -mentor -student");
    return responseHandler(
      res,
      200,
      "Student details sent successfully",
      student,
      mentor
    );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
