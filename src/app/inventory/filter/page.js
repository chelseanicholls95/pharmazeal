import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SearchBar from "@/components/SearchBar/SearchBar";
import InventoryTable from "@/components/InventoryTable/InventoryTable";

import { fetchStoreByName } from "@/controllers/stores.js";
import { fetchDrugs } from "@/controllers/inventory";

import formatDrugs from "../formatDrugs";

const filterInventoryByStore = async ({ searchParams }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const storeName = searchParams.store;
  const [store] = await fetchStoreByName(storeName);

  const allDrugs = await fetchDrugs();
  const storeDrugs = allDrugs.filter((drug) => {
    return drug.store === store._id;
  });

  const drugs = await formatDrugs(storeDrugs);

  let noDrugs = "No drugs in stock in this store.";

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Inventory</h1>;
      <SearchBar page="inventory" />
      {drugs.length === 0 ? (
        <InventoryTable drugs={noDrugs} />
      ) : (
        <InventoryTable drugs={drugs} />
      )}
    </div>
  );
};

export default filterInventoryByStore;
