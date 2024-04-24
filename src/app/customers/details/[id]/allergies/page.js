"use client";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

import { updateMedicalInfo } from "@/controllers/customers";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Allergies = ({ params }) => {
  const router = useRouter();
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const id = params.id;

  const onSubmit = async ({ allergy }) => {
    const infoToUpdate = {
      id,
      medicalInfo: allergy,
      allergy: true,
      medicalCondition: false,
    };

    const updated = await updateMedicalInfo(infoToUpdate);

    if (updated.message) {
      alert(updated.message);
      router.push(`/customers/details/${id}`);
    } else if (updated.acknowledged) {
      alert(`Successfully added ${allergy} to customer information.`);
      router.push(`/customers/details/${id}`);
      router.refresh();
    }
  };

  return (
    <div className="text-center mt-4">
      <BackgroundImage />
      <h1 className="display-1">Add an Allergy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-5 p-3 w-100 d-flex justify-content-center">
          <input
            type="text"
            id="allergy"
            {...register("allergy")}
            placeholder="Allergy..."
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

export default Allergies;
