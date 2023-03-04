import { Class } from "../../model/class";
import { responseHandler } from "../../response/responseHandler";

export const deleteClass = async (req, res) => {
  try {
    const id = req.params.id;
    const classes = await Class.findByIdAndDelete({ _id: id });
    return responseHandler(res, 200, "Class deleted successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
