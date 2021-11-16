import React from "react";
import { Component } from "react";
import "./App.css";
import Home from "./Home";
// import RefsDemo from "./RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <RefsDemo /> */}
        <Home />
      </div>
    );
  }
}
export default App;
