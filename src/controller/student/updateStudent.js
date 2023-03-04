import { Student } from "../../model/student";
import { responseHandler } from "../../response/responseHandler";

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        class: req.body.class,
        school_name: req.body.school_name,
      },
      { new: true }
    );
    return responseHandler(res, 200, "Student details updated successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
