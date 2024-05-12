import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SearchBar from "@/components/SearchBar/SearchBar";
import CustomerTable from "@/components/CustomerTable/CustomerTable";

import formatCustomers from "@/app/customers/formatCustomers";

import { fetchStoreByName } from "@/controllers/stores.js";
import { fetchCustomers } from "@/controllers/customers.js";

const filterCustomersByStore = async ({ searchParams }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const storeName = searchParams.store;
  const [store] = await fetchStoreByName(storeName);

  const allCustomers = await fetchCustomers();
  const storeCustomers = allCustomers.filter((customer) => {
    return customer.store === store._id;
  });

  const customers = await formatCustomers(storeCustomers);

  let noCustomers = "No customers registered at this store.";

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

export default filterCustomersByStore;
