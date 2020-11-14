import React from "react";
import "./Home.css";
import Product from "./Product";
import items from "./products";

const Home = () => {
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
          {items.map(item => (
            <Product
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

export default Home;
