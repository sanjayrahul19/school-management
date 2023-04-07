import { Class } from "../../model/class";
import { responseHandler } from "../../response/responseHandler";


export const updateClass = async (req, res) => {
  try {
    const id = req.params.id;
    const classes = await Class.findByIdAndUpdate(
      { _id: id },
      { class_name: req.body.class_name, school_name: req.body.school_name },
      { new: true }
    );
    return responseHandler(res, 200, "Class updated successfully",classes);
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
