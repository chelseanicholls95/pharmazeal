import DispenseButtons from "@/components/DispenseButtons/DispenseButtons";

const DispenseSale = () => {
  return (
    <div className="text-center mt-4">
      <h1>Dispense Sale</h1>
      <h5 className="mt-5">Would you like to continue to dispense the sale?</h5>
      <DispenseButtons />
    </div>
  );
};

export default DispenseSale;
