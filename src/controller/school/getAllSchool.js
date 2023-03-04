import { School } from "../../model/school";
import { responseHandler } from "../../response/responseHandler";

export const getAllSchool = async (req, res) => {
  try {
    const school = await School.find({});
    return responseHandler(
      res,
      200,
      "Mentor details sent successfully",
      school
    );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
