"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SearchBar = ({ customers }) => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const router = useRouter();

  const onSubmit = ({ searchInput }) => {
    const createQueryString = (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    };

    const queryString = createQueryString("name", searchInput.toLowerCase());
    const url = `/customers/search?${queryString}`;

    router.push(url);
  };

  return (
    <div className="input-group mb-3 w-25 ms-5">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by Surname"
          id="searchInput"
          {...register("searchInput")}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Button
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
