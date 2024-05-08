"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { fetchSaleById, updateSalesById } from "@/controllers/sales";
import { fetchDrugById, updateDrugQuantity } from "@/controllers/inventory";
import formatDrugs from "@/app/inventory/formatDrugs";

import checkId from "@/app/sales/dispense/[id]/checkId";

const DispenseButtons = ({ id }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const onClickYes = async () => {
    const checkIdNeeded = await checkId(id);

    if (checkIdNeeded) {
      const idChecked = confirm("Please check customer's ID");

      if (!idChecked) {
        alert("This item requires a positive ID check to dispense.");
        return router.push("/sales");
      }
    }

    const [sale] = await fetchSaleById(id);

    const drug = await fetchDrugById(sale.drugName);
    const [formattedDrug] = await formatDrugs(drug);

    if (drug[0].store != session.user.store) {
      alert(
        `This item is not in stock in this store. There are ${formattedDrug.totalStock} of this item in stock at ${formattedDrug.store}. `
      );
    } else {
      const quantity = drug[0].totalStock - sale.quantity;

      const newQuantity = {
        id: sale.drugName,
        quantity: quantity,
      };

      const updated = await updateSalesById(id);
      await updateDrugQuantity(newQuantity);

      if (updated.acknowledged) {
        alert("Sale dispensed successfully");
      } else {
        alert("Dispensing has been unsuccessful, please try again.");
        router.push("/sales");
      }

      if (quantity < 10) {
        alert(
          `Stock of ${drug[0].drugName} is ${quantity}. Replenishment needed.`
        );
      }

      router.push("/sales");
      router.refresh();
    }
  };

  const onClickNo = () => {
    router.push("/sales");
  };

  return (
    <div className="mt-5">
      <button className="btn btn-success btn-lg m-3" onClick={onClickYes}>
        Yes
      </button>
      <button className="btn btn-danger btn-lg m-3" onClick={onClickNo}>
        No
      </button>
    </div>
  );
};

export default DispenseButtons;
