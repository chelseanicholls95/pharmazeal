const fetchCustomers = async () => {
  const response = await fetch("http://localhost:3000/api/customers", {
    method: "GET",
  });

  return response.json();
};

const fetchCustomerById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/customers/${id}`, {
    method: "POST",
  });

  return response.json();
};

const fetchCustomersBySurname = async (surname) => {
  const response = await fetch(
    `http://localhost:3000/api/customers/search/${surname}`,
    {
      method: "POST",
    }
  );

  return response.json();
};

const updateMedicalInfo = async (infoToUpdate) => {
  console.log();
  const response = await fetch(`http://localhost:3000/api/customers`, {
    method: "PUT",
    body: JSON.stringify(infoToUpdate),
  });

  return response.json();
};

export {
  fetchCustomers,
  fetchCustomerById,
  fetchCustomersBySurname,
  updateMedicalInfo,
};
