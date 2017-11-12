import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import PropTypes from "prop-types";
import React, { Component } from "react";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">ReExpense</h1>
      <p>Get your expenses under control.</p>
        <button className="button" onClick={startLogin}>Login in with Google</button>
    </div>

  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
