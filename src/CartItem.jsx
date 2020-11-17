import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import "./CartItem.css";
const cartItem = ({ image, title, price }) => {
  return (
    <div className="cartItem">
      <section className="cartItem__image">
        <img src={image} alt="procuct picture" />
      </section>
      <section className="cartItem__text">
        <h3 className="cartItem__text__title">{title}title</h3>
        <small className="cartItem__text__small">In Stock</small>
        <small>
          <button className="cartItem__text__button">Delete</button>
        </small>
      </section>
      <section className="cartItem__price">
        <h2 className="cartItem__price__amount">
          {numeral(price).format("0,0.00")}$45.87
        </h2>
      </section>
    </div>
  );
};
const mapStateToProps = state => {
  console.log("state", state);
};
export default connect(mapStateToProps)(cartItem);
