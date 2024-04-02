import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SalesTable from "@/components/SalesTable/SalesTable";
import SearchBar from "@/components/SearchBar/SearchBar";

import { fetchSales } from "@/controllers/sales";
import formatSales from "@/app/sales/formatSales";

const Sales = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await fetchSales();
  const formattedSales = await formatSales(data);

  return (
    <div>
      <h1 className="text-center mt-4">Sales</h1>
      <SearchBar page={"sales"} />
      <SalesTable sales={formattedSales} />
    </div>
  );
};

export default Sales;
