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
  delay
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
      <p>
        <sup className="product__money">$</sup>
        {price}
      </p>
      <p>{delay}</p>
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
