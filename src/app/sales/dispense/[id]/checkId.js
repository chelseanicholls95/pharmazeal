import { fetchSaleById } from "@/controllers/sales";
import { fetchCustomerById } from "@/controllers/customers";

const checkId = async (id) => {
  const sale = await fetchSaleById(id);

  if (!sale[0].checkId) {
    const customer = await fetchCustomerById(sale[0].customer);
    return customer[0].vulnerable;
  }

  return sale[0].checkId;
};

export default checkId;
