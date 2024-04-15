import { fetchCustomerById } from "@/controllers/customers";
import { fetchDrugById } from "@/controllers/inventory";

import SalesButtons from "@/components/SaleButtons/SaleButtons";

const NewSale = async ({ params }) => {
  const { customerId, drugId } = params;

  const [drug] = await fetchDrugById(drugId);
  const [customer] = await fetchCustomerById(customerId);

  return (
    <div className="m-5 border rounded-5 shadow-lg p-3 mb-5 bg-dark text-light text-center">
      <h1 className="mt-5">New sale of {drug.drugName}</h1>
      <h5 className="m-3">Quantity</h5>

      <SalesButtons drug={drug} customer={customer} />
    </div>
  );
};

export default NewSale;
