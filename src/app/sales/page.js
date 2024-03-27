import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SalesTable from "@/components/SalesTable/SalesTable";

const Sales = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const sales = [
    {
      id: 1,
      customerName: "Susan Jones",
      dateOfSale: "21/03/2024",
      drugName: "Guanfacine",
      quantity: 2,
      showId: true,
      dispensed: false,
    },
  ];

  return (
    <div>
      <h1>Sales</h1>;
      <SalesTable sales={sales} />
    </div>
  );
};

export default Sales;
