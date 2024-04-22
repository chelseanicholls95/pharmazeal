const fetchDrugs = async () => {
  const response = await fetch("http://localhost:3000/api/inventory", {
    method: "GET",
  });

  return response.json();
};

const fetchDrugById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/inventory/${id}`, {
    method: "POST",
  });

  return response.json();
};

const fetchDrugsByName = async (drugName) => {
  const response = await fetch(
    `http://localhost:3000/api/inventory/search/${drugName}`,
    {
      method: "POST",
    }
  );

  return response.json();
};

const updateDrugQuantity = async (newQuantity) => {
  const response = await fetch(`http://localhost:3000/api/inventory`, {
    method: "PUT",
    body: JSON.stringify(newQuantity),
  });

  return response.json();
};

export { fetchDrugs, fetchDrugById, fetchDrugsByName, updateDrugQuantity };
