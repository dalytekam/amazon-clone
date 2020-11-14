import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__list">
        <section className="checkout__list__image"></section>
        <h2 className="checkout__list__title">Shopping Cart</h2>
        <section className="checkout__list__items">List</section>
      </div>
      <div className="checkout__subtotal">
        <div className="checkout__subtotal__amount">
          <Subtotal />
        </div>
        <div className="checkout__subtotal__ads">list ads</div>
      </div>
    </div>
  );
};

export default Checkout;
