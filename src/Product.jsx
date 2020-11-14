import React from "react";
import "./Product.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import numeral from "numeral";
const Product = ({
  image,
  title,
  price,
  rating,
  reviews,
  addedToCart,
  delayText,
  delayDate,
  prime,

  primeText,
  promo
}) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt={"product pic"} />
      </div>
      <p className="product__title">{title}</p>
      <div className="product__rating">
        <span>
          {Array(rating)
            .fill(0)
            .map(elt => (
              <span className="product__rating__emoji">⭐</span>
            ))}
        </span>
        <span className="product__reviews">
          {numeral(reviews).format("0,0")}
        </span>
      </div>
      <p className="product__money">
        <sup className="product__symbol">$</sup>
        {numeral(price).format("0.00")}
      </p>
      <p className="product__promoText">
        {delayText} <strong>{delayDate}</strong>
      </p>
      <div className="product__prime">
        <p>
          {prime ? (
            <>
              <CheckOutlinedIcon className="product__icon" />
              <span className="product__primeText">{primeText} </span>
              {promo}
            </>
          ) : (
            promo
          )}
        </p>
      </div>
      <div>
        <span className="product__toCart">
          <CheckCircleOutlinedIcon />
          {addedToCart}
        </span>
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
