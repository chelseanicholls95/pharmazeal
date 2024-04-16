import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchDrugs } from "@/controllers/inventory";
import formatDrugs from "@/app/inventory/formatDrugs";

import SearchBar from "@/components/SearchBar/SearchBar";
import InventoryTable from "@/components/InventoryTable/InventoryTable";

const SearchInventory = async ({ params }) => {
  const customerId = params.id;
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await fetchDrugs();
  const drugs = await formatDrugs(data);

  return (
    <div>
      <h1 className="text-center mt-4">Search Medication</h1>;
      <SearchBar page={"inventory"} />
      <InventoryTable
        drugs={drugs}
        searchMedication={true}
        customerId={customerId}
      />
    </div>
  );
};

export default SearchInventory;
