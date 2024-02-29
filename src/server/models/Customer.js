const { Schema, model } = require("mongoose");

const schema = {
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  county: {
    type: String,
  },
  country: {
    type: String,
  },
  vulnerable: {
    type: Boolean,
    default: false,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
};

const customerSchema = new Schema(schema);

const Customer = model("Customer", customerSchema);

module.exports = Customer;
