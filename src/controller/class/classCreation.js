import { Class } from "../../model/class";
import { responseHandler } from "../../response/responseHandler";

export const classCreation = async (req, res) => {
  try {
    const classes = new Class({
      class_name: req.body.class_name,
      school_name: req.body.school_name,
    });
    await classes.save();
    return responseHandler(res, 200, "Class created successfully", classes);
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
