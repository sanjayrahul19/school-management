import Subject from "../../model/subject";
import { responseHandler } from "../../response/responseHandler";

export const updateSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await Subject.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        school_name: req.body.school_name,
      },
      { new: true }
    );
    return responseHandler(res, 200, "Subject details updated successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
