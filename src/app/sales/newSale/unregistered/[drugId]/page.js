import { fetchDrugById } from "@/controllers/inventory";

import SalesButtons from "@/components/SaleButtons/SaleButtons";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

const NewSale = async ({ params }) => {
  const { drugId } = params;

  const [drug] = await fetchDrugById(drugId);

  return (
    <div className=" p-3 mb-5 text-center">
      <BackgroundImage />
      <h1 className="mt-5 display-2">New sale of {drug.drugName}</h1>
      <h3 className="mt-5">Quantity</h3>
      <SalesButtons drug={drug} />
    </div>
  );
};

export default NewSale;
