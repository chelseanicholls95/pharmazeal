"use client";

import { useRouter } from "next/navigation";

import { updateSalesById } from "@/controllers/sales";

const DispenseButtons = ({ id }) => {
  const router = useRouter();

  const onClickYes = () => {
    const updated = updateSalesById(id);
    router.push("/sales");
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
