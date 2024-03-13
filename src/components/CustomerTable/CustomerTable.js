import "./table.css";

const CustomerTable = ({ customers }) => {
  if (typeof customers === "string") {
    return (
      <div className="text-centre w-100">
        <h3>{customers}</h3>;
      </div>
    );
  }

  return (
    <div>
      <div className="main">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Surname</th>
              <th>First Name</th>
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
                  <td key="surname">{customer.surname}</td>
                  <td key="firstName">{customer.firstName}</td>
                  <td key="dateOfBirth">{customer.dateOfBirth}</td>
                  <td key="houseNumber">{customer.houseNumber}</td>
                  <td key="streetName">{customer.streetName}</td>
                  <td key="city">{customer.city}</td>
                  <td key="county">{customer.county}</td>
                  <td key="country">{customer.country}</td>
                  <td key="postCode">{customer.postCode}</td>
                  <td key="store">{customer.store}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
