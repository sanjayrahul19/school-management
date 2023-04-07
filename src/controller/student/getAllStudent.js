import { Student } from "../../model/student";
import { responseHandler } from "../../response/responseHandler";
import axios from "axios";

export const getAllStudent = async (req, res) => {
  try {
    const data = await axios.get(
      "https://public.fyers.in/sym_details/NSE_FO.csv"
    );

    const array = data.data.split("None\n");

    let objects = [];

    for (let i = 0; i < array.length; i++) {
      let obj = {};
      const split = array[i].split(",");
      obj.id = split[0];
      obj.expire_date = split[1];
      obj.contracts_sold = split[2];
      obj.quantity = split[3];
      obj.transaction_fee = split[4];
      obj.unknown = split[5];
      obj.time = split[6];
      obj.trade_occurred = split[7];
      obj.timestamp = split[8];
      obj.symbol = split[9];
      obj.highest_price = split[10];
      obj.lowest_price = split[11];
      obj.open_interest = split[12];
      obj.underlying_interest = split[13];
      obj.market_price_underlying_interest = split[14];
      obj.type_of_option_contact = split[15];
      obj.unique_identifier = split[16];

      objects.push(obj);
      // console.log(objects.length, "objects");
      // console.log(obj, "obj");
    }
    console.log(objects);
    console.log(objects.length, "objects");

    // const student = await Student.aggregate([
    //   {
    //     $lookup: {
    //       from: "schools", // name of the referenced collection
    //       localField: "school_name", // field in the current collection that refers to the referenced collection's _id
    //       foreignField: "_id", // field in the referenced collection that corresponds to the localField
    //       as: "school", // output field name
    //     },
    //   },
    //   {
    //     $project: {
    //       name: 1,
    //       school: 1,
    //     },
    //   },

    //   {
    //     $unwind: "$school", // unwind the array to flatten the output
    //   },
    //   {
    //     $group: {
    //       _id: "$school.school_name",
    //       // count: { $sum: 1 },
    //       students: { $push: "$name" },
    //     },
    //   },
    //   {
    //     $sort: { school_name: 1 },
    //   },
    //   {
    //     $limit: 1,
    //   },
    // ]);

    // return responseHandler(
    //   res,
    //   200,
    //   "Student details sent successfully",
    //   student
    // );

    // const student = await Student.find({})
    //   .populate("class school_name", { class_name: 1 })
    //   .populate("school_name");
    // return responseHandler(
    //   res,
    //   200,
    //   "Student details sent successfully",
    //   student
    // );
  } catch (err) {
    return responseHandler(res, 500, err.message);
  }
};
