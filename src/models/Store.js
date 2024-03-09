import { mongoose, Schema, model } from "mongoose";

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const storeSchema = new Schema(schema);

export default mongoose.models.Store || model("Store", storeSchema);
