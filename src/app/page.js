import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import LoginButton from "@/components/LoginButton/LoginButton";

const HomePage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <BackgroundImage />
      <h1 className="text-center m-5 display-1">PharmaZeal</h1>
      <div className="d-flex justify-content-center align-items-center">
        <LoginButton />
      </div>
    </div>
  );
};

export default HomePage;
