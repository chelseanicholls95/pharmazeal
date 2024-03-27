import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SalesTable from "@/components/SalesTable/SalesTable";
import fetchSales from "@/controllers/sales";
import formatSales from "@/app/sales/formatSales";

const Sales = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await fetchSales();
  const sales = await formatSales(data);

  return (
    <div>
      <h1>Sales</h1>
      <SalesTable sales={sales} />
    </div>
  );
};

export default Sales;
