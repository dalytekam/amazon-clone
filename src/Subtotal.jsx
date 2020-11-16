import React from "react";
import "./Subtotal.css";
import { connect } from "react-redux";
import numeral from "numeral";
const Subtotal = ({ quantity, total }) => {
  return (
    <div className="subtotal">
      <p className="subtotal__title">{`Subtotal ${quantity} (${
        quantity > 1 ? "items" : "item"
      })`}</p>
      <p className="subtotal__price">${numeral(total).format("0,0.00")}</p>
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
const mapStateToProps = state => {
  return { quantity: state.itemQuantity, total: state.total };
};
export default connect(mapStateToProps)(Subtotal);
