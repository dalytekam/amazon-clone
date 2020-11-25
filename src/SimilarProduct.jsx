import React from "react";
import "./SimilarProduct.css";
import numeral from "numeral";

const SimilarProduct = ({ image, title, price, rating, reviews }) => {
  const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
  };

  return (
    <section className="similar">
      <div className="similar__left">
        <img src={image} alt="article visual" />
      </div>
      <div className="similar__right">
        <h3>{truncateString(title, 20)}</h3>
        <span>
          {Array(rating)
            .fill(0)
            .map((elt, i) => (
              <span key={i} className="similar__right__emoji">
                ⭐
              </span>
            ))}
        </span>
        <span className="similar__right__reviews">
          {numeral(reviews).format("0,0")}
        </span>
        <p className="similar__right__money">
          ${numeral(price).format("0,0.00")}
        </p>
      </div>
    </section>
  );
};

export default SimilarProduct;
