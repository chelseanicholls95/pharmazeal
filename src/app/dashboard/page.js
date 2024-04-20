import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchSales } from "@/controllers/sales";
import formatSales from "../sales/formatSales";
import calculateSales from "./calculateSales";

import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";

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
      <div className="m-5 p-3 bg-dark text-light border border-dark text-center">
        <h1>Sales Leaderboard</h1>
        <table className="mt-5 table table-dark table-bordered">
          <thead>
            <tr>
              <th>POSITION </th>
              <th>STORE</th>
              <th>NO. SALES</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>1st</td>
              <td>{leaderboard[0].store}</td>
              <td>{leaderboard[0].quantity}</td>
            </tr>
            <tr className="table-dark">
              <td>2nd</td>
              <td>{leaderboard[1].store}</td>
              <td>{leaderboard[1].quantity}</td>
            </tr>
            <tr className="table-dark">
              <td>3rd</td>
              <td>{leaderboard[2].store}</td>
              <td>{leaderboard[2].quantity}</td>
            </tr>
            <tr className="table-dark">
              <td>4th</td>
              <td>{leaderboard[3].store}</td>
              <td>{leaderboard[3].quantity}</td>
            </tr>
            <tr className="table-dark">
              <td>5th</td>
              <td>{leaderboard[4].store}</td>
              <td>{leaderboard[4].quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
