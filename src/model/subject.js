import mongoose from "mongoose";


const subject = mongoose.model("subject", {
  name: {
    type: String,
    required: true,
  },
  school_name: {
    type: mongoose.Types.ObjectId,
    ref: "school",
  },
});

module.exports=subject;