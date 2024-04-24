"use client";

import { useRouter } from "next/navigation";

const AddButtons = ({ id }) => {
  const router = useRouter();

  const addMedicalCondition = () => {
    router.push(`/customers/details/${id}/medicalConditions`);
  };

  const addAllergy = () => {
    router.push(`/customers/details/${id}/allergies`);
  };

  return (
    <tr>
      <td>
        <button className="btn btn-light" onClick={addMedicalCondition}>
          Add +
        </button>
      </td>
      <td>
        <button className="btn btn-light" onClick={addAllergy}>
          Add +
        </button>
      </td>
    </tr>
  );
};

export default AddButtons;
