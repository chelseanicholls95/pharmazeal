import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";

const Dashboard = async ({ params }) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const user = params.username;

  return (
    <div>
      <DashboardTitle />
    </div>
  );
};

export default Dashboard;
