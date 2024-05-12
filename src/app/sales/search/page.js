import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchCustomersBySurname } from "@/controllers/customers";
import { fetchSalesByCustomerId } from "@/controllers/sales";
import formatSales from "../formatSales";

import SearchBar from "@/components/SearchBar/SearchBar";
import SalesTable from "@/components/SalesTable/SalesTable";

const SearchSales = async ({ searchParams }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const surname = searchParams.name;
  const data = await fetchCustomersBySurname(surname);

  if (data.length === 0) {
    const noCustomers =
      "Could not find any customer sales with that surname. Please try another surname.";
    return (
      <div>
        <h1 className="text-center mt-4 display-1">Sales</h1>;
        <SearchBar page="sales" />
        <SalesTable sales={noCustomers} />
      </div>
    );
  }

  const id = data[0]._id;
  const customerSales = await fetchSalesByCustomerId(id);
  const formattedSales = await formatSales(customerSales);

  return (
    <div>
      <h1 className="text-center mt-4 display-1">Sales</h1>;
      <SearchBar page="sales" />
      <SalesTable sales={formattedSales} />
    </div>
  );
};

export default SearchSales;
