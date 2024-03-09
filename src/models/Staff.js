import { mongoose, Schema, model } from "mongoose";

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

export default mongoose.models.Staff || model("Staff", staffSchema);
