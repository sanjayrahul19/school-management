import { Class } from "../../model/class";
import { Student } from "../../model/student";
import { Mentor } from "../../model/mentor";
import { responseHandler } from "../../response/responseHandler";

export const getClass = async (req, res) => {
  try {
    const id = req.params.id;
    const classes = await Class.findById({ _id: id }).populate("school_name");
    const student = await Student.find({ class: id }).select("name");
    const mentor = await Mentor.find({ class: id })
      .populate("subject", { name: 1 })
      .select("name");
    return responseHandler(res, 200, "Class details sent successfully", {
      classes,
      student,
      mentor,
    });
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
