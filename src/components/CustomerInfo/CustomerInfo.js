"use client";

import { useRouter } from "next/navigation";

import MedicalInfo from "../MedicalInfo/MedicalInfo";

const CustomerInfo = ({ customer, previousMedication }) => {
  const router = useRouter();
  console.log(customer);

  const {
    _id,
    firstName,
    surname,
    dateOfBirth,
    houseNumber,
    streetName,
    postCode,
    city,
    vulnerable,
    store,
    allergies,
    medicalConditions,
  } = customer;

  const onClick = (event) => {
    const drugId = event.target.parentElement.id;
    router.push(`/sales/newSale/${_id}/${drugId}`);
  };

  return (
    <div className="d-flex">
      <div className="m-4 w-100 bg-dark text-light border border-dark rounded">
        <h3 className="text-center mt-3">
          {firstName} {surname}
        </h3>
        <div className="ms-4 my-4">
          <h5>Date of Birth: {dateOfBirth}</h5>
          <h5>
            Address: {houseNumber} {streetName}, {city}, {postCode}
          </h5>
          <h5>Is Vulnerable: {vulnerable ? "Yes" : "No"}</h5>
          <h5>Store: {store}</h5>
        </div>
      </div>
      <div className="m-4 w-100 bg-dark text-light border border-dark rounded">
        <h3 className="text-center mt-3">Previous Medication</h3>
        <div className="m-3">
          <table className="table table-dark table-hover border text-center">
            <tbody>
              {typeof previousMedication === "string" ? (
                <tr key="noMedication">
                  <td>{previousMedication}</td>
                </tr>
              ) : (
                previousMedication.map((medication, index) => {
                  return (
                    <tr key={index} id={medication.id} onClick={onClick}>
                      <td>{medication.name}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <MedicalInfo
        id={_id}
        allergies={allergies}
        medicalConditions={medicalConditions}
      />
    </div>
  );
};
export default CustomerInfo;
