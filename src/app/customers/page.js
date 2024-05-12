import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomers } from "@/controllers/customers";
import formatCustomers from "@/app/customers/formatCustomers";

import SearchBar from "@/components/SearchBar/SearchBar";
import CustomerTable from "@/components/CustomerTable/CustomerTable";

const CustomerDatabase = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  
  const data = await fetchCustomers();
  const customers = await formatCustomers(data);

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Customer Table</h1>;
      <SearchBar page={"customers"} />
      <CustomerTable customers={customers} />
    </div>
  );
};

export default CustomerDatabase;
