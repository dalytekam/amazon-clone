import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ quantity }) => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://res.cloudinary.com/dalytekam/image/upload/v1604872388/Amazon-Logo.jpg"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__input" type="text" />
        <SearchIcon className="header__seacrhIcon" />
      </div>
      <div className="header__right">
        <div className="header__right__1">
          <span>Hello, Sign in</span>
          <strong>Account & List</strong>
        </div>
        <div className="header__right__2">
          <span>Returns</span>
          <strong>& Orders</strong>
        </div>
        <div className="header__right__3">
          <span></span>
          <strong>Try Prime</strong>
        </div>
        <Link to="/checkout">
          <div className="header__right__4">
            <span>{quantity}</span>

            <ShoppingCartOutlinedIcon
              style={{ color: "white", marginBottom: "-3.5rem" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { quantity: state.itemQuantity };
};
export default connect(mapStateToProps)(Header);
