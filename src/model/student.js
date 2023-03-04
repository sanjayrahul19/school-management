import mongoose from "mongoose";

export const Student = mongoose.model("student", {
  name: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  school_name: {
    type: mongoose.Types.ObjectId,
    ref: "school",
  },
});
