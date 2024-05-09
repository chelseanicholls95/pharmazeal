const fetchStores = async () => {
  const response = await fetch("http://localhost:3000/api/stores", {
    method: "GET",
  });

  return response.json();
};

const fetchStoreByName = async (name) => {
  const response = await fetch(`http://localhost:3000/api/stores/${name}`, {
    method: "POST",
  });

  return response.json();
};

export { fetchStores, fetchStoreByName };
