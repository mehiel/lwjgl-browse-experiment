import React, { Component, unstable_Suspense as Suspense } from "react";
import { Browse } from "./routes";
import { Router, Redirect } from "@reach/router";

class App extends Component {
  render() {
    return (
      <Router component="main">
        <Redirect from="/" to="/browse" />
        <Browse path="/browse/*" />
      </Router>
    );
  }
}

export default App;
