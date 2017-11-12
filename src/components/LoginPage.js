import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import PropTypes from "prop-types";
import React, { Component } from "react";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
