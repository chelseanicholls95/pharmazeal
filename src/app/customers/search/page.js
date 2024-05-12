import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomersBySurname } from "@/controllers/customers";
import formatCustomers from "../formatCustomers";

import SearchBar from "@/components/SearchBar/SearchBar";
import CustomerTable from "@/components/CustomerTable/CustomerTable";

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

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Customer Table</h1>;
      <SearchBar page="customers" />
      {customers.length === 0 ? (
        <CustomerTable customers={noCustomers} />
      ) : (
        <CustomerTable customers={customers} />
      )}
    </div>
  );
};

export default SearchCustomers;
