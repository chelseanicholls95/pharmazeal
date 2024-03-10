import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import moment from "moment";

import fetchCustomers from "@/controllers/customers";
import fetchStores from "@/controllers/stores";
import Table from "@/components/Table/Table";

const formatCustomers = async (customers) => {
  const stores = await fetchStores();
  return customers.map((customer) => {
    const newDateOfBirth = moment(customer.dateOfBirth).format("DD/MM/YYYY");
    const store = stores.find((store) => store._id === customer.store);
    return {
      ...customer,
      dateOfBirth: newDateOfBirth,
      store: store.name,
    };
  });
};

export default async function CustomerDatabase() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await fetchCustomers();
  const customers = await formatCustomers(data);

  return (
    <div>
      <h1 className="text-center mt-4">Customer Table</h1>;
      <Table customers={customers} />
    </div>
  );
}
