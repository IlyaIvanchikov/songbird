import React, { Component } from "react";
import Header from "./Header";
import Quastion from "./Quastion";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
        <div className="container">
            <div className="row">
                <Header {...this.state} className="col s12"/>
                <Quastion  className="col s12"/>
                <div className="col s6">6-columns (one-half)</div>
                <div className="col s6">6-columns (one-half)</div>
            </div>
        </div>
            )
  }
}
export default App;