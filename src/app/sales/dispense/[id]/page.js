"use client";
import DispenseButtons from "@/components/DispenseButtons/DispenseButtons";

const DispenseSale = ({ params }) => {
  const id = params.id;

  return (
    <div className="text-center mt-4">
      <h1>Dispense Sale</h1>
      <h5 className="mt-5">Would you like to continue to dispense the sale?</h5>
      <DispenseButtons id={id} />
    </div>
  );
};

export default DispenseSale;
