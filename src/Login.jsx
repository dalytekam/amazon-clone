import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import { auth } from "./firebase";

const Login = ({ lgoginAndPassword, dispatch }) => {
  const history = useHistory();
  const onChangeEmail = e => {
    dispatch({ type: actions.ON_CHANGE_EMAIL, payload: e.target.value });
  };
  const onChangePassword = e => {
    dispatch({ type: actions.ON_CHANGE_PASSWORD, payload: e.target.value });
  };

  const signup = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        lgoginAndPassword.email,
        lgoginAndPassword.password
      )
      .then(auth => {
        console.log(auth);
        alert("Your account was successfully created");
        if (auth) {
          history.push("/");
        }
      })

      .catch(error => console.log(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://res.cloudinary.com/dalytekam/image/upload/v1606274831/Amazon_logo.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__input__container">
        <h2>Sign-In</h2>
        <form>
          <p>E-mail</p>
          <input
            type="email"
            value={lgoginAndPassword.email}
            onChange={onChangeEmail}
          />
          <p>Password</p>
          <input
            type="password"
            value={lgoginAndPassword.password}
            onChange={onChangePassword}
          />
          <button className="login__signinButton">Sign-In</button>
        </form>
        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__signup">
        <h5>New to Amazon?</h5>
        <button className="login__signupButton" onClick={signup}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    lgoginAndPassword: {
      email: state.credentials.email,
      password: state.credentials.password
    }
  };
};
export default connect(mapStateToProps)(Login);
