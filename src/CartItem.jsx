import React from "react";
import { connect } from "react-redux";
const cartItem = () => {
  return (
    <div className="cart">
      <section className="cart__image"></section>
      <section className="cart__text"></section>
      <section className="cart__price"></section>
    </div>
  );
};
const mapStateToProps = state => {
  console.log("state", state);
};
export default connect(mapStateToProps)(cartItem);
