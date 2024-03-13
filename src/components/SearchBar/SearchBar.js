"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SearchBar = ({ customers }) => {
  const form = useForm();
  const { register, handleSubmit } = form;
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

  const onClick = () => {
    router.push("/customers");
  };

  return (
    <div className="input-group mb-3 w-100 ms-5">
      <form
        className="form w-100 d-flex justify-content-around"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex w-25">
          <input
            type="text"
            className="form-control "
            placeholder="Search by Surname"
            id="searchInput"
            {...register("searchInput")}
            required
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
        <div>
          <button className="btn btn-danger " onClick={onClick}>
            Reset Customers
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
