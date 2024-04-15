"use client";
import "./table.css";

import { useRouter } from "next/navigation";

const SalesTable = ({ sales }) => {
  const router = useRouter();

  if (typeof sales === "string") {
    return (
      <div className="text-centre w-100">
        <h3>{sales}</h3>;
      </div>
    );
  }

  const onClick = (event) => {
    const id = event.target.id;
    router.push(`/sales/dispense/${id}`);
  };

  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover align-middle">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer Name</th>
              <th>Date of Sale</th>
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Show ID?</th>
              <th>Dispensed?</th>
              <th>Dispense</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => {
              return (
                <tr key={index}>
                  <td>{sale._id}</td>
                  <td>{sale.customer}</td>
                  <td>{sale.dateOfSale}</td>
                  <td>{sale.drugName}</td>
                  <td>{sale.quantity}</td>
                  {sale.checkId ? <td>yes</td> : <td>no</td>}
                  {sale.dispensed ? <td>yes</td> : <td>no</td>}
                  {sale.dispensed ? (
                    <td></td>
                  ) : (
                    <td>
                      <button
                        className="btn btn-sm btn-success"
                        id={sale._id}
                        onClick={onClick}
                      >
                        Dispense
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
