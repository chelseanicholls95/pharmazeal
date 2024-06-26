"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SearchBar = ({ page }) => {
  const form = useForm();
  const { register, handleSubmit } = form;
  const router = useRouter();

  let placeholder = "";

  if (page === "customers" || page === "sales") {
    placeholder = "Search by surname";
  } else {
    placeholder = "Search by drug name";
  }

  const onSubmit = ({ searchInput }) => {
    const createQueryString = (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    };

    const queryString = createQueryString("name", searchInput.toLowerCase());
    const url = `/${page}/search?${queryString}`;

    router.push(url);
  };

  const onClick = () => {
    router.push(`/${page}`);
  };

  const filterByStore = (event) => {
    const storeName = event.target.id;

    const createQueryString = (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    };

    const queryString = createQueryString("store", storeName);
    const url = `/${page}/filter?${queryString}`;

    router.push(url);
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
            className="form-control"
            placeholder={placeholder}
            id="searchInput"
            {...register("searchInput")}
            required
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
        <div className="d-flex" onChange={filterByStore}>
          <p className="m-1">Filter by:</p>
          <div className="form-check m-1">
            <input
              className="form-check-input"
              type="radio"
              name="storeFilter"
              id="stoke"
            />
            <label className="form-check-label" htmlFor="stoke">
              Stoke
            </label>
          </div>
          <div className="form-check m-1">
            <input
              className="form-check-input"
              type="radio"
              name="storeFilter"
              id="fenton"
            />
            <label className="form-check-label" htmlFor="fenton">
              Fenton
            </label>
          </div>
          <div className="form-check m-1">
            <input
              className="form-check-input"
              type="radio"
              name="storeFilter"
              id="longton"
            />
            <label className="form-check-label" htmlFor="longton">
              Longton
            </label>
          </div>
          <div className="form-check m-1">
            <input
              className="form-check-input"
              type="radio"
              name="storeFilter"
              id="hanley"
            />
            <label className="form-check-label" htmlFor="hanley">
              Hanley
            </label>
          </div>
          <div className="form-check m-1">
            <input
              className="form-check-input"
              type="radio"
              name="storeFilter"
              id="tunstall"
            />
            <label className="form-check-label" htmlFor="tunstall">
              Tunstall
            </label>
          </div>
        </div>
        <div>
          {page === "customers" || page === "sales" ? (
            <button className="btn btn-danger" onClick={onClick}>
              Reset Customers
            </button>
          ) : (
            <button className="btn btn-danger" onClick={onClick}>
              Reset Inventory
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
