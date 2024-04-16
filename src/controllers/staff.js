const fetchStaff = async (username) => {
  const response = await fetch(`http://localhost:3000/api/staff/${username}`, {
    method: "POST",
  });

  return response.json();
};
