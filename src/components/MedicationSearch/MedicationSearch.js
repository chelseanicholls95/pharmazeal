"use client";

import { useRouter } from "next/navigation";

const MedicationSearch = ({ id }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/inventory/${id}`);
  };

  return (
    <div className=" text-center d-grid gap-2">
      <button className="btn btn-lg btn-danger m-5" onClick={onClick}>
        SEARCH FOR MEDICATION
      </button>
    </div>
  );
};

export default MedicationSearch;
