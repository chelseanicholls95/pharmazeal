import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchSales } from "@/controllers/sales";
import formatSales from "../sales/formatSales";
import calculateSales from "./calculateSales";

import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";
import DashboardNavigation from "@/components/DashboardNavigation/DashboardNavigation";
import SalesLeaderboard from "@/components/SalesLeaderboard/SalesLeaderboard";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const data = await fetchSales();
  if (data.length === 0) {
    return (
      <div>
        <DashboardTitle />
        <div className="d-flex justify-content-center w-100">
          <DashboardNavigation />
        </div>
      </div>
    );
  }

  const sales = await formatSales(data);

  const stokeSales = calculateSales(sales, "Stoke");
  const longtonSales = calculateSales(sales, "Longton");
  const hanleySales = calculateSales(sales, "Hanley");
  const tunstallSales = calculateSales(sales, "Tunstall");
  const fentonSales = calculateSales(sales, "Fenton");

  const leaderboard = stokeSales.concat(
    longtonSales,
    hanleySales,
    tunstallSales,
    fentonSales
  );

  leaderboard.sort((a, b) => b.quantity - a.quantity);

  return (
    <div>
      <DashboardTitle />
      <div className="d-flex justify-content-center w-100">
        <DashboardNavigation />
        <SalesLeaderboard leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default Dashboard;
