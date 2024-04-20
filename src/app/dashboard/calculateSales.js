const calculateSales = (sales, store) => {
  const storeSales = sales.filter((sale) => {
    return sale.store == store;
  });

  if (storeSales.length === 0) {
    return {
      store,
      quantity: 0,
    };
  }

  const quantityArray = storeSales.map((sale) => {
    return sale.quantity;
  });

  const quantity = quantityArray.reduce((total, value) => {
    return total + value;
  });

  return [
    {
      store,
      quantity,
    },
  ];
};

export default calculateSales;
