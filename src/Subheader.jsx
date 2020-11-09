import React from "react";
import "./Subheader.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const Subheader = () => {
  const links = [
    "Holiday Deals",
    "Gift Cards",
    "Best Sellers",
    "Customer Service",
    "Find a Gift",
    "New Releases",
    "Whole Foods",
    "AmazonBasics",
    "Free Shipping",
    "Registry",
    "Sell",
    "Coupons",
    "#FoundItOnAmazon",
    "Shopper Toolkit"
  ];

  return (
    <div className="subheader">
      <div className="subheader__address">
        <LocationOnOutlinedIcon className="subheader__address__icon" />
        <li>
          <a href="#link">{"Select your Address"}</a>
        </li>
      </div>
      <ul className="subheader__link">
        <>
          {links.map((link, i) => (
            <div key={i}>
              <li>
                <a href="#link">{link}</a>
              </li>
            </div>
          ))}
          <div className="subheader__link__last">
            <li>
              <a href="#link">
                <strong>{"Shop today's deals now"}</strong>
              </a>
            </li>
          </div>
        </>
      </ul>
    </div>
  );
};

export default Subheader;
