"use client";
import "./table.css";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SalesTable = ({ sales }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (typeof sales === "string") {
    return (
      <div className="text-center m-5">
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
      {!session ? (
        <div>Loading...</div>
      ) : (
        <div className="main">
          <table className="table table-dark table-hover align-middle">
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Customer Name</th>
                <th>Date of Sale</th>
                <th>Drug Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Store</th>
                <th>Show ID?</th>
                <th>Dispensed?</th>
              </tr>
            </thead>
            {session.user.isAdmin ? (
              <tbody>
                {sales.map((sale, index) => {
                  return (
                    <tr key={index}>
                      <td>{sale._id}</td>
                      <td>{sale.customer}</td>
                      <td>{sale.dateOfSale}</td>
                      <td>{sale.drugName}</td>
                      <td>{sale.quantity}</td>
                      <td>£{sale.totalPrice}.00</td>
                      <td>{sale.store}</td>
                      {sale.checkId ? <td>yes</td> : <td>no</td>}
                      {sale.dispensed ? (
                        <td>yes</td>
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
            ) : (
              <tbody>
                {sales.map((sale, index) => {
                  if (sale.storeId === session.user.store) {
                    return (
                      <tr key={index}>
                        <td>{sale._id}</td>
                        <td>{sale.customer}</td>
                        <td>{sale.dateOfSale}</td>
                        <td>{sale.drugName}</td>
                        <td>{sale.quantity}</td>
                        <td>£{sale.totalPrice}.00</td>
                        <td>{sale.store}</td>
                        {sale.checkId ? <td>yes</td> : <td>no</td>}
                        {sale.dispensed ? (
                          <td>yes</td>
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
                  } else {
                    return;
                  }
                })}
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default SalesTable;
