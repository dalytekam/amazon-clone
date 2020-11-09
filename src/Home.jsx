import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://res.cloudinary.com/dalytekam/image/upload/v1604894245/alexa-onsale.jpg"
          alt="home background"
        />
        <div className="products">
          <Product
            price={15}
            title={
              "Purina Fancy Feast Grilled Feast in Gravy Canned Wet Cat FoodPurina Fancy Feast Grilled Feast in Gravy Canned Wet Cat FoodPurina Fancy Feast Grilled Feast in Gravy Canned Wet Cat FoodPurina Fancy Feast Grilled Feast in Gravy Canned Wet Cat Food"
            }
            image={
              "https://res.cloudinary.com/dalytekam/image/upload/v1604897184/8120Lb01SxL._AC_UL320_.jpg"
            }
            reviews={11136}
            addedToCart={false}
            rating={4}
          />
        </div>
        <div className="products"></div>
        <div className="products"></div>
        <div className="products"></div>
      </div>
    </div>
  );
};

export default Home;
