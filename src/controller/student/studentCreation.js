import {Student} from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const studentCreation = async (req, res) => {
  try {
    const student = await Student({
      name: req.body.name,
      class: req.body.class,
      school_name: req.body.school_name,
    });
    await student.save();
    return responseHandler(res, 200, "Student created successfully",student);
  } catch (error) {
    return responseHandler(res, 500, err.message);
  }
};

