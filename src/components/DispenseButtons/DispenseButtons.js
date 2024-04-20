"use client";

import { useRouter } from "next/navigation";

import { fetchSaleById, updateSalesById } from "@/controllers/sales";

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

    const updated = await updateSalesById(id);
    console.log(updated);

    if (updated.acknowledged) {
      alert("Sale dispensed successfully");
    } else {
      alert("Dispensing has been unsuccessful, please try again.");
      router.push("/sales");
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
