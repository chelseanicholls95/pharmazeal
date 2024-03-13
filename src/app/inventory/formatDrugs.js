import moment from "moment";

import fetchStores from "@/controllers/stores";

const formatDrugs = async (drugs) => {
  const stores = await fetchStores();

  const mappedDrugs = drugs.map((drug) => {
    const newExpiryDate = moment(drug.expiryDate).format("DD/MM/YYYY");
    const store = stores.find((store) => store._id === drug.store);
    return {
      ...drug,
      expiryDate: newExpiryDate,
      store: store.name,
    };
  });

  return mappedDrugs.sort((a, b) => a.drugName.localeCompare(b.drugName));
};

export default formatDrugs;
