import mongoose from "mongoose";

export const School = mongoose.model("school", {
  school_name: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  mentor: {
    type: mongoose.Types.ObjectId,
    ref: "mentor",
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: "student",
  },
  subject: {
    type: mongoose.Types.ObjectId,
    ref: "subject",
  },
});


