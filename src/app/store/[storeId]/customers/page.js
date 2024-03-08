import Table from "../../../../components/Table/Table";

const fetchCustomers = async () => {
  const response = await fetch("http://localhost:3000/api/customers", {
    method: "GET",
  });

  return response.json();
};

export default async function CustomerDatabase() {
  const customers = await fetchCustomers();
  console.log(customers);
  return (
    <div>
      <h1 className="text-center mt-4">Customer Table</h1>;
      <Table customers={customers} />
    </div>
  );
}
