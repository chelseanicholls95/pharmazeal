const db = require("../config/connection");

const Store = require("../models/Store");
const Staff = require("../models/Staff");
const Customer = require("../models/Customer");

const stores = require("./stores");
const staff = require("./staff");
const stokeCustomers = require("./stokeCustomers");
const longtonCustomers = require("./longtonCustomers");
const tunstallCustomers = require("./tunstallCustomers");
const hanleyCustomers = require("./hanleyCustomers");
const fentonCustomers = require("./fentonCustomers");

db.once("open", async () => {
  try {
    // Deleting existing models
    await Store.deleteMany({});
    await Staff.deleteMany({});
    await Customer.deleteMany({});

    console.log("---COLLECTIONS DELETED---");

    // Seeding stores
    await Store.insertMany(stores);
    console.log("---STORES ADDED---");

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
    console.log("---STAFF ADDED---");

    // Seeding customers
    const addStoreId = async (storeLocation, customers) => {
      const [location] = await Store.find({ name: storeLocation });
      const customersToSeed = customers.map((customer) => {
        return {
          ...customer,
          store: location.id,
        };
      });
      return customersToSeed;
    };

    const stokeCustomersToSeed = await addStoreId("Stoke", stokeCustomers);
    const longtonCustomersToSeed = await addStoreId(
      "Longton",
      longtonCustomers
    );
    const tunstallCustomersToSeed = await addStoreId(
      "Tunstall",
      tunstallCustomers
    );
    const hanleyCustomersToSeed = await addStoreId("Hanley", hanleyCustomers);
    const fentonCustomersToSeed = await addStoreId("Fenton", fentonCustomers);

    const customersToSeed = stokeCustomersToSeed.concat(
      longtonCustomersToSeed,
      tunstallCustomersToSeed,
      hanleyCustomersToSeed,
      fentonCustomersToSeed
    );

    await Customer.insertMany(customersToSeed);
    console.log("---CUSTOMERS ADDED---");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
