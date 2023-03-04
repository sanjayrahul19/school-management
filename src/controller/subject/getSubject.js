import Subject from "../../model/subject";
import { responseHandler } from "../../response/responseHandler";

export const getSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await Subject.findById({ _id: id }).populate("school_name");
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
