import React, { Component, unstable_Suspense as Suspense } from "react";
import { Browse } from "./routes";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <Router component="main">
        <Browse path="/browse/*" />
      </Router>
    );
  }
}

export default App;
