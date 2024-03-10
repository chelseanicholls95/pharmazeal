import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Inventory = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Inventory</h1>;
};

export default Inventory;
