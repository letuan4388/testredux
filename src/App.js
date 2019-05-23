import React, { Component } from "react";
import { connect } from "react-redux";
import WrappedNormalLoginForm from "./Login/Login";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Username: {this.props.userInfo}</h1>
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tech: state.tech,
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(App);
