import mongoose from "mongoose";

export const Mentor = mongoose.model("mentor", {
  name: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  subject: {
    type: mongoose.Types.ObjectId,
    ref: "subject",
  },
  school_name: {
    type: mongoose.Types.ObjectId,
    ref: "school",
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: "student",
  },
});
