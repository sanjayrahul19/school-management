import { School } from "../../model/school";
import { responseHandler } from "../../response/responseHandler";

export const updateSchool = async (req, res) => {
  try {
    const id = req.params.id;
    const school = await School.findByIdAndUpdate(
      { _id: id },
      { school_name: req.body.school_name },
      { new: true }
    );
    return responseHandler(res, 200, "School details updated successfully");
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
