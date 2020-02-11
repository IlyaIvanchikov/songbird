import React, { Component } from "react";
import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";
import Description from "./Description";
import FinishFrame from "./FinishFrame";
import  './styles/app.css';

import Info from './info/InfoBirds.json';
import publicInfo from './info/publicInfo.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleDesc = this.handleDesc.bind(this);
    this.state = {
      score: 0,
      count: 4,
      sound: Info.Sound,
      typeBirds: publicInfo.TypeBirds,
      clrBtn: 0,
      variableBirds: Info.VariableBirds,
      description: null,
      rand: Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1)),
      image: Info.Image,
      arrRed: [],
      arrGreen: [],
      ringtons: publicInfo.Ringtons
    };
  }
 
  handleClick(e) {
    this.setState({
       clrBtn: this.state.clrBtn + 1,
       rand: Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1)),
       description: null,
       arrRed: [],
       arrGreen: [],
       count: 4,
       ringtons: publicInfo.Ringtons
      });
  };

  handleDesc(e) {
    if (this.state.rand == e && this.state.arrGreen.length == 0) {
      this.setState({
        description: e,
        arrGreen: this.state.arrGreen.concat(e),
        score: this.state.count + this.state.score
      });
    }
    else if (this.state.rand != e && !this.state.arrRed.includes(e)) {
      this.setState({
        arrRed: this.state.arrRed.concat(e),
        count: this.state.count - 1
      });
    }
  }
  render() {

    let finish;
    let clrMainBtn;
    let ringtons;
    if (this.state.rand == this.state.description) {
      clrMainBtn = <button className="button"  style={{backgroundColor: "green"}} onClick={e => this.handleClick()}>Next level</button>;
    }
    else {
      clrMainBtn = <button className="button"  disabled style={{backgroundColor: "red"}} onClick={e => this.handleClick()}>Next level</button>;
    }

    if (this.state.rand == this.state.description) {
      ringtons = <audio src={this.state.ringtons[0]} autoPlay></audio>;
    }
    else if (this.state.rand != this.state.description && this.state.description != null){
      ringtons = <audio src={this.state.ringtons[1]} autoPlay></audio>;
    }
    console.log(ringtons);
      if (this.state.clrBtn === 6) {
      return finish =  (
        <div className="row">
        <Header 
        score={this.state.score} 
        typeBirds={this.state.typeBirds} 
        clrBtn={this.state.clrBtn} 
        className="col s12"
        />
        <FinishFrame 
        score={this.state.score} 
        />
        </div>
      );
     }
      return finish =  (
        <div className="row">
        <Header 
        score={this.state.score} 
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
        {ringtons}
        </div>
    </div>
       );
    
    return (
        <div className="container">
          {finish}
        </div>
    )
  }
}
export default App;