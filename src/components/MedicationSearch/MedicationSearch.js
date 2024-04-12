"use client";

import { useForm } from "react-hook-form";

const MedicationSearch = ({ id, drugs }) => {
  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmit = () => {
    console.log("submmitted");
  };

  return (
    <div className="m-4 border">
      <h3 className="text-center">Purchase Medication</h3>
      <div className="m-5 d-flex justify-content-center">
        <form
          className="form w-100 d-flex justify-content-around"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="d-flex w-25">
            <input
              type="text"
              className="form-control"
              placeholder="Search Medication"
              id="searchInput"
              {...register("searchInput")}
              required
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicationSearch;
