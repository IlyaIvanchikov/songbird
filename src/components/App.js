import React, { Component } from "react";
import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";
import Description from "./Description";
import  './styles/app.css';

import Info from './info/InfoBirds.json';
import publicInfo from './info/publicInfo.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleDesc = this.handleDesc.bind(this);
    this.state = {
      count: 0,
      sound: Info.Sound,
      typeBirds: publicInfo.TypeBirds,
      clrBtn: 0,
      variableBirds: Info.VariableBirds,
      description: 0,
      rand: Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1)),
      image: Info.Image,
      clrTag: null,
      arrRed: [],
      arrGreen: [],
    };
  }
 
  handleClick(e) {
    this.setState({
       clrBtn: this.state.clrBtn + 1,
       rand: Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1)),
       clrTag: null,
       description: null,
       arrRed: [],
       arrGreen: []
      });
  };

  handleDesc(e) {
    if (this.state.rand == e) {
      this.setState({
        description: e,
        clrTag: e,
        arrGreen: this.state.arrGreen.concat(e)
      });
    }
    else if (this.state.rand != e) {
      this.setState({
        clrTag: e,
        arrRed: this.state.arrRed.concat(e)
      });
    }
  }
  render() {
    let clrMainBtn;
    if (this.state.rand == this.state.description) {
      clrMainBtn = <button className="button"  style={{backgroundColor: "green"}} onClick={e => this.handleClick()}>Next level</button>;
    }
    else {
      clrMainBtn = <button className="button"  disabled style={{backgroundColor: "red"}} onClick={e => this.handleClick()}>Next level</button>;
    }
     // if (this.state.rand == this.state.description ) {
         
    //   }
    //   else {
    //     return <button className="button" disabled style={{backgroundColor: "red"}} onClick={e => this.handleClick()}>Next level</button>
    //   }
    // );
    //clrMainBtn();
    return (
        <div className="container">
            <div className="row">
                <Header 
                count={this.state.count} 
                typeBirds={this.state.typeBirds} 
                clrBtn={this.state.clrBtn} 
                className="col s12"
                />
                <Question  
                sound={this.state.sound} 
                clrBtn={this.state.clrBtn} 
                oneBird={this.state.description} 
                image={this.state.image}
                rand={this.state.rand}
                variableBirds= {this.state.variableBirds} 
                className="col s12"
                />
                <Answers 
                variableBirds= {this.state.variableBirds} 
                descAnswer={this.handleDesc} 
                clrBtn={this.state.clrBtn}
                rand={this.state.rand}
                arrRed={this.state.arrRed}
                arrGreen={this.state.arrGreen}
                />
                <Description 
                oneBird={this.state.description}
                />
                <div className="col s12">
                {clrMainBtn}
                </div>
            </div>
        </div>
            )
  }
}
export default App;