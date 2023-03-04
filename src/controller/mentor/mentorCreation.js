import { Mentor } from "../../model/mentor";
import { responseHandler } from "../../response/responseHandler";

export const mentorCreation = async (req, res) => {
  try {
    const mentor = new Mentor({
      name: req.body.name,
      subject: req.body.subject,
      school_name: req.body.school_name,
      class:req.body.class
    });
    await mentor.save();
    return responseHandler(res, 200, "Mentor created successfully", mentor);
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
