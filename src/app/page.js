import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Button from "@/components/Button/Button";

const HomePage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-100 border d-flex justify-content-center align-items-center vh-100 background">
      <Button />
    </div>
  );
};

export default HomePage;
