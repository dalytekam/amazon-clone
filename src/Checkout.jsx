import React from "react";
import CartItem from "./CartItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { connect } from "react-redux";
import SimilarProduct from "./SimilarProduct";

const Checkout = ({ cart, total, quantity, productsOnSale }) => {
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
              <span>
                {new Intl.NumberFormat("en-EN", {
                  style: "currency",
                  currency: "USD"
                }).format(total)}
              </span>
            </p>
          </section>
        </section>
      </div>
      <div className="checkout__subtotal">
        <div className="checkout__subtotal__amount">
          <Subtotal />
        </div>
        <div className="checkout__subtotal__ads">
          <h4>Products you recently viewed</h4>
          {productsOnSale.map(item => (
            <SimilarProduct
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = store => {
  console.log(store.productsToSale);
  return {
    cart: store.cart,
    total: store.total,
    quantity: store.itemQuantity,
    productsOnSale: store.productsToSale
  };
};
export default connect(mapStateToProps)(Checkout);
