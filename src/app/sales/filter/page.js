import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SearchBar from "@/components/SearchBar/SearchBar";
import SalesTable from "@/components/SalesTable/SalesTable";

import { fetchStoreByName } from "@/controllers/stores.js";
import { fetchSales } from "@/controllers/sales.js";

import formatSales from "../formatSales";

const filterSalesByStore = async ({ searchParams }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const storeName = searchParams.store;
  const [store] = await fetchStoreByName(storeName);

  const allSales = await fetchSales();

  const storeSales = allSales.filter((sale) => {
    return sale.store === store._id;
  });

  if (storeSales.length === 0) {
    let noSales = "No sales registered at this store.";
    return (
      <div>
        <h1 className="text-center mt-4 display-1">Sales</h1>;
        <SearchBar page="sales" />
        <SalesTable sales={noSales} />
      </div>
    );
  }

  const sales = await formatSales(storeSales);

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Sales</h1>;
      <SearchBar page="sales" />
      <SalesTable sales={sales} />
    </div>
  );
};

export default filterSalesByStore;
