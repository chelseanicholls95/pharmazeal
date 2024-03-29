import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Home Page</h1>;
};

export default Dashboard;
