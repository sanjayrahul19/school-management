import { School } from "../../model/school";
import { Mentor } from "../../model/mentor";
import { Class } from "../../model/class";
import { Subject } from "../../model/subject";
import { Student } from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const getSchool = async (req, res) => {
  try {
    const id = req.params.id;
    const school = await School.findById({
      _id: id,
    });
    const student = await Student.find({
      school_name: id,
    }).select("name");
    const classes = await Class.find({ school_name: id }).select("class_name");
    const mentor = await Mentor.find({ school_name: id })
      .populate("subject", { school_name: 0 })
      .select("-school_name -class");
    // const subject = await Subject.find({ school_name: id });
    return responseHandler(
      res,
      200,
      "School details sent successfully",
      school,
      student,
      mentor,
      classes
    );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
