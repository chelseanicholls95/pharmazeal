import mongoose from "mongoose";

const DB_NAME = process.env.DB_NAME || "pharmazeal";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

export default mongoose.connection;
