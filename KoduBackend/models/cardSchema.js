import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  Category: {
    type: Array,
  },
  Desc: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

export const CoursesDetails = mongoose.model("CoursesDetails", cardSchema);
