import { fetchSaleById } from "@/controllers/sales";

const checkId = async (id) => {
  const sale = await fetchSaleById(id);

  return sale[0].checkId;
};

export default checkId;
