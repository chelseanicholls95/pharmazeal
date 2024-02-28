import { Schema, model } from "mongoose";
import { hashPassword, validatePassword } from "../utils/password";

const schema = {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
};

const staffSchema = new Schema(schema);

staffSchema.pre("save", hashPassword);

staffSchema.methods.validatePassword = validatePassword;

const Staff = model("Staff", staffSchema);

export default Staff;