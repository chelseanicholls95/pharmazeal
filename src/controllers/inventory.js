const fetchDrugs = async () => {
  const response = await fetch("http://localhost:3000/api/inventory", {
    method: "GET",
  });

  return response.json();
};

const fetchDrugsByName = async (drugName) => {
  const response = await fetch(
    `http://localhost:3000/api/inventory/${drugName}`,
    {
      method: "POST",
    }
  );

  return response.json();
};

export { fetchDrugs, fetchDrugsByName };
