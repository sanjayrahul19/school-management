import {Student} from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete({ _id: id });
    return responseHandler(res, 200, "Student deleted successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
