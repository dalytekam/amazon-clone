import React from "react";
import CartItem from "./CartItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { connect } from "react-redux";

const Checkout = ({ cart, total, quantity }) => {
  return (
    <div className="checkout">
      <div className="checkout__list">
        <section className="checkout__list__image"></section>
        <h2 className="checkout__list__title">Shopping Cart</h2>
        <section className="checkout__list__items">
          {cart.length === 0 ? (
            <p className="checkout__list__items__empty">Your Cart is empty</p>
          ) : (
            cart.map(item => (
              <CartItem
                prid={item.prid}
                key={item.prid}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          )}

          <section className="checkout__list__items__subtotal">
            <p>
              {`Subtotal ${quantity} (${quantity > 1 ? "items" : "item"})`}:
              <span> {total}</span>
            </p>
          </section>
        </section>
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
const mapStateToProps = store => {
  return { cart: store.cart, total: store.total, quantity: store.itemQuantity };
};
export default connect(mapStateToProps)(Checkout);
