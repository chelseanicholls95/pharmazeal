"use client";

import moment from "moment";
import mongoose from "mongoose";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { saveNewSale } from "@/controllers/sales";

const SaleButtons = ({ drug, customer }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { data: session, update, status } = useSession();

  const onClickMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onClickPlus = () => {
    setQuantity(quantity + 1);
  };

  const onClickDispense = async () => {
    const store = session.user.store;
    const date = moment().format("MM/DD/YYYY");

    const newSale = {
      customer: customer._id,
      drugName: drug._id,
      quantity: quantity,
      dateOfSale: date,
      dispensed: false,
      checkId: drug.requiresId,
      store: store,
    };

    const sale = await saveNewSale(JSON.stringify(newSale));
    const saleId = sale._id;

    router.push(`/sales/dispense/${saleId}`);
  };

  const onClickCancel = () => {
    router.back();
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-secondary m-4" onClick={onClickMinus}>
          -
        </button>
        <h4 className="align-self-center">{quantity}</h4>
        <button className="btn btn-secondary m-4" onClick={onClickPlus}>
          +
        </button>
      </div>
      <button className="m-4 btn btn-lg btn-success" onClick={onClickDispense}>
        Dispense
      </button>
      <button className="m-4 btn btn-lg btn-danger" onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  );
};

export default SaleButtons;
