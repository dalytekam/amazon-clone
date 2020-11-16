import React from "react";
import "./Home.css";
import Product from "./Product";

import { connect } from "react-redux";

const Home = ({ products }) => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={
            "https://res.cloudinary.com/dalytekam/image/upload/v1604894245/alexa-onsale.jpg"
          }
          alt="home background"
        />
        <div className="products">
          {products.map(item => (
            <Product
              id={item.id}
              key={item.id}
              price={item.price}
              title={item.title}
              image={item.image}
              reviews={item.reviews}
              addedToCart={item.addedToCart}
              rating={item.rating}
              delayText={item.delayText}
              delayDate={item.delayDate}
              promo={item.promo}
              primeText={item.primeText}
              prime={item.prime}
            />
          ))}
        </div>
        <div className="products"></div>
        <div className="products"></div>
        <div className="products"></div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    products: state.productsToSale
  };
};
export default connect(mapStateToProps)(Home);
