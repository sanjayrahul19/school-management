import Subject from "../../model/subject";
import { responseHandler } from "../../response/responseHandler";

export const subjectCreation = async (req, res) => {
  try {
    // const subject = await Subject.create({
    //   name: req.body.name,
    //   school_name: req.body.school_name,
    // });
    const subject = await Subject({
      name: req.body.name,
      school_name: req.body.school_name,
    }).populate("school_name");
    await subject.save();
    return responseHandler(res, 200, "Subject created successfully", subject);
  } catch (err) {
    console.log(err);
    return responseHandler(res, 500, err.message);
  }
};
