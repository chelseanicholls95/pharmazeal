"use client";

import { useRouter } from "next/navigation";

import { fetchSaleById, updateSalesById } from "@/controllers/sales";
import { fetchDrugById, updateDrugQuantity } from "@/controllers/inventory";

import checkId from "@/app/sales/dispense/[id]/checkId";

const DispenseButtons = ({ id }) => {
  const router = useRouter();

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

    const [drug] = await fetchDrugById(sale.drugName);
    const quantity = drug.totalStock - sale.quantity;

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
      alert(`Stock of ${drug.drugName} is ${quantity}. Replenishment needed.`);
    }

    router.push("/sales");
    router.refresh();
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
