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

  const onClick = () => {
    router.push(`/sales/dispense`);
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
            {sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td key="saleNumber">{sale._id}</td>
                  <td key="customer">{sale.customer}</td>
                  <td key="dateOfSale">{sale.dateOfSale}</td>
                  <td key="drugName">{sale.drugName}</td>
                  <td key="quantity">{sale.quantity}</td>
                  {sale.showId ? (
                    <td key="showId">yes</td>
                  ) : (
                    <td key="showId">no</td>
                  )}
                  {sale.dispensed ? (
                    <td key="dispensed">yes</td>
                  ) : (
                    <td key="dispensed">no</td>
                  )}
                  {sale.dispensed ? (
                    <td key="toDispense"></td>
                  ) : (
                    <td key="toDispense">
                      <button
                        className="btn btn-sm btn-success"
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
