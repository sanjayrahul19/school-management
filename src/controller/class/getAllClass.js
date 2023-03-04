import { Class } from "../../model/class";
import { responseHandler } from "../../response/responseHandler";

export const getAllClass = async (req, res) => {
  try {
    const classes = await Class.find({}).populate("school_name");
    return responseHandler(res, 200, "Class details sent successfully", classes);
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
