import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomerById } from "@/controllers/customers";
import { fetchDrugById } from "@/controllers/inventory";
import formatDrugs from "@/app/inventory/formatDrugs";

import SalesButtons from "@/components/SaleButtons/SaleButtons";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

const NewSale = async ({ params }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const { customerId, drugId } = params;

  const drugData = await fetchDrugById(drugId);
  const [drug] = await formatDrugs(drugData);
  const [customer] = await fetchCustomerById(customerId);

  return (
    <div className=" p-3 mb-5 text-center">
      <BackgroundImage />
      <h1 className="mt-5 display-2">New sale of {drug.drugName}</h1>
      <h3 className="mt-5">Quantity</h3>
      <SalesButtons drugData={drugData} drug={drug} customer={customer} />
    </div>
  );
};

export default NewSale;
