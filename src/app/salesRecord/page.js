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
  }

  const data = await fetchSales();
  const sales = await formatSales(data);

  const drugs = fetchDrugs();

  let salesRecord = [];

  sales.map((sale) => {
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
