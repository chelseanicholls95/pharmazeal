import moment from "moment";
import { fetchCustomers } from "@/controllers/customers";
import { fetchDrugs } from "@/controllers/inventory";
import { fetchStores } from "@/controllers/stores";

const formatSales = async (data) => {
  const customers = await fetchCustomers();
  const drugs = await fetchDrugs();
  const stores = await fetchStores();

  const formattedData = data.map((sale) => {
    const customer = customers.find(
      (customer) => customer._id === sale.customer
    );
    const drug = drugs.find((drug) => drug._id === sale.drugName);
    const store = stores.find((store) => store._id === sale.store);
    const newDateOfSale = moment(sale.dateOfSale).format("DD/MM/YYYY");

    let newSale = {};

    if (sale.customer) {
      newSale = {
        ...sale,
        customer: `${customer.firstName} ${customer.surname}`,
        drugName: drug.drugName,
        dateOfSale: newDateOfSale,
        storeId: sale.store,
        store: store.name,
        showId: drug.requiresId,
      };
    } else {
      newSale = {
        ...sale,
        customer: "Unregistered Customer",
        drugName: drug.drugName,
        dateOfSale: newDateOfSale,
        storeId: sale.store,
        store: store.name,
        showId: drug.requiresId,
      };
    }

    return newSale;
  });

  return formattedData;
};

export default formatSales;
