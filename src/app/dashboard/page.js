import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <DashboardTitle />
    </div>
  );
};

export default Dashboard;
