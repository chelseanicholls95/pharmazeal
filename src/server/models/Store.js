const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const storeSchema = new Schema(schema);

const Store = model("Store", storeSchema);

module.exports = Store;
