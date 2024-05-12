import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import DispenseButtons from "@/components/DispenseButtons/DispenseButtons";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

const DispenseSale = async ({ params }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const id = params.id;

  return (
    <div className="text-center mt-4">
      <BackgroundImage />
      <h1 className="display-1">Dispense Sale</h1>
      <h3 className="mt-5">Would you like to continue to dispense the sale?</h3>
      <DispenseButtons id={id} />
    </div>
  );
};

export default DispenseSale;
