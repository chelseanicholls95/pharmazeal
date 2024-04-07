"use client";

import { useRouter } from "next/navigation";

import { updateSalesById } from "@/controllers/sales";

import checkId from "@/app/sales/dispense/[id]/checkId";

const DispenseButtons = ({ id }) => {
  const router = useRouter();

  const onClickYes = async () => {
    const checkIdNeeded = await checkId(id);

    if (checkIdNeeded) {
      const idChecked = confirm("Please check customer's ID");

      if (!idChecked) {
        router.push("/sales");
      }
    }

    await updateSalesById(id);

    console.log(updated);

    if (updated) {
      alert("Items dispensed");
      router.push("/sales");
    } else {
      alert("Unable to complete dispensing item, please try again.");
    }
  };

  const onClickNo = () => {
    router.back();
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
