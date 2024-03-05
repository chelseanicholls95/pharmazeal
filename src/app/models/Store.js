import { Schema, model } from "mongoose";

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const storeSchema = new Schema(schema);

const Store = model("Store", storeSchema);

export default Store;
