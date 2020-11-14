import React from "react";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <p className="subtotal__title">Subtotal (21) items</p>
      <p className="subtotal__price">${5324}</p>
      <p className="subtotal__gift">
        <input type="checkbox" className="subtotal__check" /> This order
        contains a gift
      </p>
      <div className="subtotal__button">
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Subtotal;
