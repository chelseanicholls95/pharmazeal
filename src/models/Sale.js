import { mongoose, Schema, model } from "mongoose";

const schema = {
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  drugName: {
    type: Schema.Types.ObjectId,
    ref: "Drug",
  },
  quantity: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  dispensed: {
    type: Boolean,
    default: false,
  },
  checkId: {
    type: Boolean,
    default: false,
  },
};

const saleSchema = new Schema(schema);

export default mongoose.models.Sale || model("Sale", saleSchema);
