import { Schema } from "mongoose";

type userSchema = User;

const userSchema = new Schema(
  {
    uid: String,
    name: String,
    email: String,
  },
  {
    timestamps: true,
  },
);

export default userSchema;
