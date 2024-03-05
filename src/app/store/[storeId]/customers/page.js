"use client";

import { useEffect, useState } from "react";

const CustomerDatabase = () => {
  const fetchCustomers = async () => {
    const res = await fetch("/api/customers");
    const customers = await res.json();
    return customers;
  };

  const [customers, setCustomers] = useState();

  useEffect(() => {
    fetchCustomers().then((customers) => {
      setCustomers(customers);
    });
  });

  return (
    <div>
      <h1>Customers</h1>
    </div>
  );
};

export default CustomerDatabase;
