import "./table.css";

const SalesTable = ({ sales }) => {
  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer Name</th>
              <th>Date of Sale</th>
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Show ID?</th>
              <th>Dispensed?</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              console.log(sale.showId);
              return (
                <tr key={sale.id}>
                  <td key="saleNumber">{sale.id}</td>
                  <td key="customerName">{sale.customerName}</td>
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
