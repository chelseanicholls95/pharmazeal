const fetchCustomers = async () => {
  const response = await fetch("http://localhost:3000/api/customers", {
    method: "GET",
  });

  return response.json();
};

const fetchCustomersBySurname = async (surname) => {
  const response = await fetch(
    `http://localhost:3000/api/customers/${surname}`,
    {
      method: "POST",
    }
  );

  return response.json();
};

export { fetchCustomers, fetchCustomersBySurname };
