import Subject from "../../model/subject";
import { responseHandler } from "../../response/responseHandler";
export const getAllSubject = async (req, res) => {
  try {
    const subject = await Subject.find({}).populate("school_name");
    return responseHandler(
      res,
      200,
      "Subject details sent successfully",
      subject
    );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
