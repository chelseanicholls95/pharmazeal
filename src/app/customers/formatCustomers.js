import moment from "moment";

import { fetchStores } from "@/controllers/stores";

const formatCustomers = async (customers) => {
  const stores = await fetchStores();

  const mappedCustomers = customers.map((customer) => {
    const newDateOfBirth = moment(customer.dateOfBirth).format("DD/MM/YYYY");
    const store = stores.find((store) => store._id === customer.store);
    return {
      ...customer,
      dateOfBirth: newDateOfBirth,
      store: store.name,
    };
  });

  return mappedCustomers.sort((a, b) => a.surname.localeCompare(b.surname));
};

export default formatCustomers;
