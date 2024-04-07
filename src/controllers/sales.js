const fetchSales = async () => {
  const response = await fetch("http://localhost:3000/api/sales", {
    method: "GET",
  });

  return response.json();
};

const fetchSaleById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/sales/dispense/${id}`,
    { method: "POST" }
  );

  return response.json();
};

const fetchSalesByCustomerId = async (id) => {
  const response = await fetch(`http://localhost:3000/api/sales/search/${id}`, {
    method: "POST",
  });

  return response.json();
};

const updateSalesById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/sales/dispense/${id}`,
    {
      method: "PUT",
    }
  );
  return response.json();
};

export { fetchSales, fetchSaleById, fetchSalesByCustomerId, updateSalesById };
