import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomers } from "@/controllers/customers";
import formatCustomers from "@/app/customers/formatCustomers";
import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table/Table";

const CustomerDatabase = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }
  const data = await fetchCustomers();
  const customers = await formatCustomers(data);

  return (
    <div>
      <h1 className="text-center mt-4">Customer Table</h1>;
      <SearchBar customers={customers} />
      <Table customers={customers} />
    </div>
  );
};

export default CustomerDatabase;
