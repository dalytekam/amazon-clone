import React from "react";
import numeral from "numeral";
import "./CartItem.css";
import { connect } from "react-redux";
import * as actions from "./actions";
const cartItem = ({ image, title, price, removeFromCart }) => {
  return (
    <div className="cartItem">
      <section className="cartItem__image">
        <img src={image} alt="procuct picture" />
      </section>
      <section className="cartItem__text">
        <h3 className="cartItem__text__title">{title}</h3>
        <small className="cartItem__text__small">In Stock</small>
        <small>
          <button
            className="cartItem__text__button"
            onClick={() => {
              removeFromCart();
            }}
          >
            Delete
          </button>
        </small>
      </section>
      <section className="cartItem__price">
        <h2 className="cartItem__price__amount">
          ${numeral(price).format("0,0.00")}
        </h2>
      </section>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { prid, price } = ownProps;
  return {
    removeFromCart: () => {
      dispatch({
        type: actions.REMOVE_FROM_CART,
        payload: { prid, price }
      });
    }
  };
};
export default connect(null, mapDispatchToProps)(cartItem);
