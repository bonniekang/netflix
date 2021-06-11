import React, { Component } from "react";
import Router from "./Router.js";
import Header from "./Header.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    )
  }
}

export default App;
