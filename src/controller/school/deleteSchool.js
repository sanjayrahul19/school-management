import { School } from "../../model/school";
import { responseHandler } from "../../response/responseHandler";

export const deleteSchool = async (req, res) => {
  try {
    const id = req.params.id;
    const school = await School.findByIdAndDelete({ _id: id });
    return responseHandler(res, 200, "School deleted successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
