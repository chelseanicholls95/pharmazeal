"use client";

import "../CustomerTable/table.css";
import { useRouter } from "next/navigation";

const InventoryTable = ({ drugs, searchMedication, customerId }) => {
  const router = useRouter();

  const onClick = (event) => {
    if (searchMedication) {
      const drugId = event.target.parentElement.id;
      router.push(`/sales/newSale/${customerId}/${drugId}`);
    }
  };

  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Drug Name</th>
              <th>Total Stock</th>
              <th>Price</th>
              <th>Expiry Date</th>
              <th>Store</th>
              <th>Requires ID?</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug, index) => {
              return (
                <tr key={index} id={drug._id} onClick={onClick}>
                  <td>{drug.drugName}</td>
                  <td>{drug.totalStock}</td>
                  <td>{drug.price}.00</td>
                  <td>{drug.expiryDate}</td>
                  <td>{drug.store}</td>
                  {drug.requiresId ? <td>Yes</td> : <td>No</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
