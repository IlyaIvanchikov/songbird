import React, { Component } from "react";
import Header from "./Header";

class App extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <Header />
                <div className="col s6">6-columns (one-half)</div>
                <div className="col s6">6-columns (one-half)</div>
            </div>
        </div>
            )
  }
}
export default App;