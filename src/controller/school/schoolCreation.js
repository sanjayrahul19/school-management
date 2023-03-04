import {School} from "../../model/school";
import { responseHandler } from "../../response/responseHandler";

export const schoolCreation = async (req, res) => {
  try {
    const school = new School({
      school_name: req.body.school_name,
    });
    await school.save();
    return responseHandler(res, 200, "School created successfully",school);
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};

