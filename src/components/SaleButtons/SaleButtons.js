"use client";

import moment from "moment";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { saveNewSale } from "@/controllers/sales";

const SaleButtons = ({ drugData, drug, customer }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(drug.price);
  const { data: session } = useSession();

  const onClickMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const updatedPrice = drug.price * newQuantity;

      setQuantity(newQuantity);
      setPrice(updatedPrice);
    }
  };

  const onClickPlus = () => {
    if (quantity < 5) {
      const newQuantity = quantity + 1;
      const updatedPrice = drug.price * newQuantity;

      setQuantity(newQuantity);
      setPrice(updatedPrice);
    }
  };

  const onClickContinue = async () => {
    const store = session.user.store;

    if (store != drugData.store) {
      const proceed = confirm(
        `This medication is not in stock in this store. Collection will be from ${drug.store}. Would you like to continue?`
      );

      if (!proceed) {
        return router.push("/inventory");
      }
    }

    const date = moment().format("MM/DD/YYYY");

    let newSale = {};

    if (customer) {
      newSale = {
        customer: customer._id,
        drugName: drug._id,
        quantity: quantity,
        totalPrice: price,
        dateOfSale: date,
        dispensed: false,
        checkId: drug.requiresId,
        store: store,
      };
    } else {
      newSale = {
        drugName: drug._id,
        quantity: quantity,
        totalPrice: price,
        dateOfSale: date,
        dispensed: false,
        checkId: drug.requiresId,
        store: store,
      };

      const sale = await saveNewSale(JSON.stringify(newSale));
      const saleId = sale._id;

      router.push(`/sales/dispense/${saleId}`);
    }
  };

  const onClickCancel = () => {
    router.back();
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-dark mx-4" onClick={onClickMinus}>
          -
        </button>
        <h4 className="align-self-center">{quantity}</h4>
        <button className="btn btn-dark mx-4" onClick={onClickPlus}>
          +
        </button>
        <h3>Total Price: £{price}.00</h3>
      </div>
      <button className="m-4 btn btn-lg btn-success" onClick={onClickContinue}>
        Continue
      </button>
      <button className="m-4 btn btn-lg btn-danger" onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  );
};

export default SaleButtons;
