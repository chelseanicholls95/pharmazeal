const fetchStores = async () => {
  const response = await fetch("http://localhost:3000/api/stores", {
    method: "GET",
  });

  return response.json();
};

export default fetchStores;
