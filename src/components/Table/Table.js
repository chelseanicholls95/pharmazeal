import "./table.css";

const Table = ({ customers }) => {
  console.log(customers);

  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Surname</th>
              <th>Date of Birth</th>
              <th>House Number</th>
              <th>Street Name</th>
              <th>City</th>
              <th>County</th>
              <th>Country</th>
              <th>Postcode</th>
              <th>Store</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.firstName}</td>
                  <td>{customer.surname}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.houseNumber}</td>
                  <td>{customer.streetName}</td>
                  <td>{customer.city}</td>
                  <td>{customer.county}</td>
                  <td>{customer.country}</td>
                  <td>{customer.postCode}</td>
                  <td>Store</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
