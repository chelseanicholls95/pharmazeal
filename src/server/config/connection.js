const mongoose = require("mongoose");

const DB_NAME = process.env.DB_NAME || "pharmazeal";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

mongoose.connect(DB_URL);

module.exports = mongoose.connection;
