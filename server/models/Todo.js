import mongoose from "mongoose";
const { Schema } = mongoose;
const { model } = mongoose;


const Todo = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 30,
    },
    completed: {
        type: Boolean,
        default: false
    },
  },
  { timestamps: true }
);

export default model("Todo", Todo);
