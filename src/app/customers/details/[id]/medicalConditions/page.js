"use client";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

import { updateMedicalInfo } from "@/controllers/customers";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const MedicalConditions = ({ params }) => {
  const router = useRouter();
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const id = params.id;

  const onSubmit = async ({ medicalCondition }) => {
    const infoToUpdate = {
      id,
      medicalInfo: medicalCondition,
      allergy: false,
      medicalCondition: true,
    };

    const updated = await updateMedicalInfo(infoToUpdate);

    if (updated.message) {
      alert(updated.message);
      router.push(`/customers/details/${id}`);
    } else if (updated.acknowledged) {
      alert(`Successfully added ${medicalCondition} to customer information.`);
      router.push(`/customers/details/${id}`);
    }
  };

  return (
    <div className="text-center mt-4">
      <BackgroundImage />
      <h1 className="display-1">Add a Medical Condition</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-5 p-3 w-100 d-flex justify-content-center">
          <input
            type="text"
            id="medicalCondition"
            {...register("medicalCondition")}
            placeholder="Medical Condition..."
            className="form-control w-50"
            required
          ></input>
        </div>
        <div className="p-3">
          <button className="btn btn-light btn-lg">Update Customer</button>
        </div>
      </form>
    </div>
  );
};

export default MedicalConditions;
