import { mongoose, Schema, model } from "mongoose";

const schema = {
  drugName: {
    type: String,
    required: true,
  },
  totalStock: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  requiresId: {
    type: Boolean,
    default: false,
  },
};

const drugSchema = new Schema(schema);

export default mongoose.models.Drug || model("Drug", drugSchema);
