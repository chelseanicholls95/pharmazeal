"use client";

const DispenseButtons = () => {
  const onClickYes = () => {
    console.log("dispensed");
  };

  const onClickNo = () => {
    console.log("not dispensed");
  };

  return (
    <div className="mt-5">
      <button className="btn btn-success btn-lg m-3" onClick={onClickYes}>
        Yes
      </button>
      <button className="btn btn-danger btn-lg m-3" onClick={onClickNo}>
        No
      </button>
    </div>
  );
};

export default DispenseButtons;
