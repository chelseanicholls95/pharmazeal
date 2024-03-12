import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomersBySurname } from "@/controllers/customers";
import formatCustomers from "../formatCustomers";

import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table/Table";

const SearchCustomers = async ({ searchParams }) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const surname = searchParams.name;
  const data = await fetchCustomersBySurname(surname);
  const customers = await formatCustomers(data);

  let noCustomers = "";

  if (customers.length === 0) {
    noCustomers =
      "Could not find any customers with that surname. Please try another surname.";
  }
  console.log(noCustomers);

  return (
    <div>
      <h1 className="text-center mt-4">Customer Table</h1>;
      <SearchBar />
      {customers.length === 0 ? (
        <Table customers={noCustomers} />
      ) : (
        <Table customers={customers} />
      )}
    </div>
  );
};

export default SearchCustomers;
