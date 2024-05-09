import moment from "moment";

import { fetchStores } from "@/controllers/stores";

const formatDrugs = async (drugs) => {
  const stores = await fetchStores();

  const mappedDrugs = drugs.map((drug) => {
    const newExpiryDate = moment(drug.expiryDate).format("DD/MM/YYYY");
    const store = stores.find((store) => store._id === drug.store);
    return {
      ...drug,
      price: `£${drug.price}`,
      expiryDate: newExpiryDate,
      store: store.name,
    };
  });

  if (mappedDrugs.length === 1) {
    return mappedDrugs;
  }

  return mappedDrugs.sort((a, b) => a.drugName.localeCompare(b.drugName));
};

export default formatDrugs;
