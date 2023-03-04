import mongoose from "mongoose";

export const Class = mongoose.model("class", {
  class_name: {
    type: String,
    required: true,
  },
  school_name: {
    type: mongoose.Types.ObjectId,
    ref: "school",
  },
});


