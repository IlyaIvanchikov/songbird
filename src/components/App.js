import React, { Component } from "react";
import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";
import Description from "./Description";
import  './styles/app.css';
import Info from './info/training.json';
class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      count: 0,
      active: true,
      sound: Info.sound,
    };
  }
 
  render() {
    return (
        <div className="container">
            <div className="row">
                <Header {...this.state} className="col s12"/>
                <Question  {...this.state} className="col s12"/>
                <Answers/>
                <Description/>
                <div className="col s12">
                <button className="button">Next level</button>
                </div>
            </div>
        </div>
            )
  }
}
export default App;