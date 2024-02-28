const db = require("../config/connection");

const Store = require("../models/Store");
const Staff = require("../models/Staff");

const stores = require("./stores");
const staff = require("./staff");

db.once("open", async () => {
  try {
    // Deleting existing models
    await Store.deleteMany({});
    await Staff.deleteMany({});

    console.log("Collections deleted");

    // Seeding stores
    await Store.insertMany(stores);
    console.log("Stores added");

    // Seeding staff

    const storesFromDb = await Store.find({});

    const staffToSeed = staff.map((staffMember) => {
      let randomNumber = Math.floor(Math.random() * storesFromDb.length);

      if (randomNumber < 0) {
        randomNumber = 0;
      }
      const storeId = storesFromDb[randomNumber].id;

      return {
        ...staffMember,
        store: storeId,
      };
    });

    await Staff.insertMany(staffToSeed);
    console.log("Staff added");

    const staffFromDb = await Staff.find({});
    console.log(staffFromDb);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
