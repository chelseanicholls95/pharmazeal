const db = require("../config/connection");
const Store = require("../models/Store");
const stores = require("./stores");

db.once("open", async () => {
  try {
    await Store.deleteMany({});

    console.log("Collections deleted");

    await Store.insertMany(stores);
    console.log("Stores added");

    const storesFromDb = await Store.find({});
    console.log(storesFromDb);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
