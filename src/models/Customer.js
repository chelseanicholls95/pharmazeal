import { mongoose, Schema, model } from "mongoose";

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
  allergies: {
    type: [String],
    default: [],
  },
  medicalConditions: {
    type: [String],
    default: [],
  },
};

const customerSchema = new Schema(schema);

export default mongoose.models.Customer || model("Customer", customerSchema);
