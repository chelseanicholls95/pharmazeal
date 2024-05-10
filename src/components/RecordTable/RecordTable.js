"use client";

import "../CustomerTable/table.css";

import { useSession } from "next-auth/react";

const RecordTable = ({ salesRecord }) => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <div>Loading...</div>
      ) : (
        <div className="main">
          <table className="table table-dark table-hover align-middle">
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Total Stock</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {salesRecord.map((record, index) => {
                return (
                  <tr key={index}>
                    <td>{record.drugName}</td>
                    <td>10</td>
                    <td>{record.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecordTable;
