import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchSales } from "@/controllers/sales";
import { fetchDrugs } from "@/controllers/inventory";
import formatSales from "@/app/sales/formatSales";

import RecordTable from "@/components/RecordTable/RecordTable";

const SalesRecord = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  } else if (!session.user.isAdmin) {
    redirect("/dashboard");
  }

  const salesData = await fetchSales();
  const sales = await formatSales(salesData);

  const drugs = await fetchDrugs();

  let salesRecord = [];

  sales.map((sale) => {
    const stock = drugs.map((drug) => {
      if (drug.drugName === sale.drugName) {
        return drug.totalStock;
      } else {
        return 0;
      }
    });

    const totalStock = stock.reduce(
      (partialSum, stock) => partialSum + stock,
      0
    );

    const inArray = salesRecord.find((record) => {
      if (sale.drugName === record.drugName) {
        return true;
      } else {
        return false;
      }
    });

    if (!inArray) {
      const record = {
        drugName: sale.drugName,
        totalStock: totalStock,
        quantity: sale.quantity,
      };
      salesRecord.push(record);
    } else {
      const index = salesRecord.findIndex(
        (record) => record.drugName === sale.drugName
      );

      salesRecord[index] = {
        ...salesRecord[index],
        quantity: salesRecord[index].quantity + sale.quantity,
      };
    }
  });

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Sales Record</h1>
      <RecordTable salesRecord={salesRecord} />
    </div>
  );
};

export default SalesRecord;
