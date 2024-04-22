import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchSales } from "@/controllers/sales";
import formatSales from "../sales/formatSales";
import calculateSales from "./calculateSales";

import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";
import SalesLeaderboard from "@/components/SalesLeaderboard/SalesLeaderboard";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await fetchSales();
  const sales = await formatSales(data);

  const stokeSales = calculateSales(sales, "Stoke");
  const longtonSales = calculateSales(sales, "Longton");
  const henleySales = calculateSales(sales, "Henley");
  const tunstallSales = calculateSales(sales, "Tunstall");
  const fentonSales = calculateSales(sales, "Fenton");

  const leaderboard = stokeSales.concat(
    longtonSales,
    henleySales,
    tunstallSales,
    fentonSales
  );

  leaderboard.sort((a, b) => b.quantity - a.quantity);

  return (
    <div>
      <DashboardTitle />
      <SalesLeaderboard leaderboard={leaderboard} />
    </div>
  );
};

export default Dashboard;
