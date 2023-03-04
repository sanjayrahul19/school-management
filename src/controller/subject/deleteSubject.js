import Subject from "../../model/subject";
import { responseHandler } from "../../response/responseHandler";

export const deleteSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await Subject.findByIdAndDelete({ _id: id });
    return responseHandler(res, 200, "Subject deleted successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
