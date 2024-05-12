import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchDrugsByName } from "@/controllers/inventory";
import formatDrugs from "../formatDrugs";

import SearchBar from "@/components/SearchBar/SearchBar";
import InventoryTable from "@/components/InventoryTable/InventoryTable";

const SearchCustomers = async ({ searchParams }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const drugName = searchParams.name;
  const data = await fetchDrugsByName(drugName);
  const drugs = await formatDrugs(data);

  let noDrugs = "";

  if (drugs.length === 0) {
    noDrugs =
      "Could not find any drugs with that surname. Please try another name.";
  }

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Customer Table</h1>;
      <SearchBar page="inventory" />
      {drugs.length === 0 ? (
        <InventoryTable drugs={noDrugs} />
      ) : (
        <InventoryTable drugs={drugs} />
      )}
    </div>
  );
};

export default SearchCustomers;
