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
      rand: Math.floor(0 + Math.random() * (3 + 3 - 0)),
      image: Info.Image,
      clrTag: null,

    };
  }
 
  handleClick(e) {
    console.log(this.state.clrTag);
    this.setState({
       clrBtn: this.state.clrBtn + 1,
       rand: Math.floor(0 + Math.random() * (3 + 3 - 0)),
       clrTag: null
      });
  };

  handleDesc(e) {
    console.log(e);
    this.setState({
      description: e,
      clrTag: e
    });
  }
  render() {
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
                clrTag={this.state.clrTag}
                rand={this.state.rand}
                />
                <Description 
                oneBird={this.state.description}
                />
                <div className="col s12">
                <button className="button" onClick={e => this.handleClick()}>Next level</button>
                </div>
            </div>
        </div>
            )
  }
}
export default App;