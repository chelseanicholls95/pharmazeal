const fetchCustomers = async () => {
  const response = await fetch("http://localhost:3000/api/customers", {
    method: "GET",
  });

  return response.json();
};

export default fetchCustomers;
