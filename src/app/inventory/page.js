import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchDrugs } from "@/controllers/inventory";
import formatDrugs from "@/app/inventory/formatDrugs";

import SearchBar from "@/components/SearchBar/SearchBar";
import InventoryTable from "@/components/InventoryTable/InventoryTable";

const Inventory = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const data = await fetchDrugs();
  const drugs = await formatDrugs(data);

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Inventory</h1>;
      <SearchBar page={"inventory"} />
      <InventoryTable drugs={drugs} />
    </div>
  );
};

export default Inventory;
