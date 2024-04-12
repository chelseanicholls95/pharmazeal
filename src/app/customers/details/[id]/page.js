import CustomerInfo from "@/components/CustomerInfo/CustomerInfo";
import MedicationSearch from "@/components/MedicationSearch/MedicationSearch";
import formatCustomers from "@/app/customers/formatCustomers";
import { fetchCustomerById } from "@/controllers/customers";
import { fetchSalesByCustomerId } from "@/controllers/sales";
import { fetchDrugs } from "@/controllers/inventory";

const CustomerDetails = async ({ params }) => {
  const id = params.id;
  const customerDetails = await fetchCustomerById(id);
  const [customer] = await formatCustomers(customerDetails);

  const drugs = await fetchDrugs();

  const previousSales = await fetchSalesByCustomerId(id);

  let previousMedication = "";

  if (previousSales.length === 0) {
    previousMedication = "No previous medication";
  } else {
    previousMedication = previousSales.map((sale) => {
      const medication = drugs.find((drug) => drug._id === sale.drugName);
      return { id: medication._id, name: medication.drugName };
    });
  }

  return (
    <div>
      <h1 className="m-5 text-center">Customer Details</h1>
      <div className="d-flex flex-column">
        <CustomerInfo
          customer={customer}
          previousMedication={previousMedication}
        />
        <MedicationSearch id={id} drugs={drugs} />
      </div>
    </div>
  );
};

export default CustomerDetails;
