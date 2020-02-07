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
    this.handleDesc = this.handleDesc.bind(this);
    this.state = {
      count: 0,
      sound: Info.sound,
      typeBirds: Info.TypeBirds,
      variableBirds: Info.VariableBirds,
      clrBtn: 0,
      test: 0
    };
  }
 
  handleClick(e) {
    this.setState({ clrBtn: this.state.clrBtn + 1});
  };

  handleDesc(e) {
    this.setState({
      test: e
    });
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <Header {...this.state} className="col s12"/>
                <Question  {...this.state} className="col s12"/>
                <Answers {...this.state} desc={this.handleDesc}/>
                <Description desc1={this.state.test}/>
                <div className="col s12">
                <button className="button" onClick={e => this.handleClick()}>Next level</button>
                </div>
            </div>
        </div>
            )
  }
}
export default App;