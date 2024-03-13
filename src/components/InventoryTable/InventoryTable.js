import "../CustomerTable/table.css";

const InventoryTable = ({ drugs }) => {
  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Drug Name</th>
              <th>Total Stock</th>
              <th>Expiry Date</th>
              <th>Store</th>
              <th>Requires ID?</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => {
              return (
                <tr key={drug.id}>
                  <td key="drugName">{drug.drugName}</td>
                  <td key="totalStock">{drug.totalStock}</td>
                  <td key="expiryDate">{drug.expiryDate}</td>
                  <td key="store">{drug.store}</td>
                  {drug.requiresId ? (
                    <td key="requiresId">Yes</td>
                  ) : (
                    <td key="requiresId">No</td>
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

export default InventoryTable;
