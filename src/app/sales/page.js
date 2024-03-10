import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Sales = async () => {
  const session = await getServerSession();
  console.log(session);

  if (!session) {
    redirect("/login");
  }

  return <h1>Customer Orders</h1>;
};

export default Sales;
