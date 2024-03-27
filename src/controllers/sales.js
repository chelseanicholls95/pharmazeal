const fetchSales = async () => {
  const response = await fetch("http://localhost:3000/api/sales", {
    method: "GET",
  });

  return response.json();
};

export default fetchSales;
