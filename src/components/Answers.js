import React, { Component } from "react";
import  "./styles/answers.css";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleGreen = this.handleGreen.bind(this);
    this.handleRed = this.handleRed.bind(this);
    // this.state = {
    //   arrClrRed: this.props.checkArr,
    //   arrClrGreen: this.props.checkArr
    // }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.descAnswer(e.target.id);
  };

  handleRed(e) {
    e.preventDefault();
    if (e.target.id != this.props.rand) {
      this.props.redBtn(e.target.id);
    }
  };

  handleGreen(e) {
    e.preventDefault();
    if (e.target.id == this.props.rand) {
      this.props.greenBtn(e.target.id);
    }
  };

  render() {
 
    const variableBirds = this.props.variableBirds;
    const clrBtn = this.props.clrBtn;

    const answerTag = variableBirds[clrBtn].map((item, index) => (
      <a href="#!" className="collection-item" id={index} key={index} style={{backgroundColor: "#008966"}} onClick={this.handleClick}  onClick={this.handleGreen}>{item}</a>
    ));

    this.props.arrRed.map((item, index) => {
      answerTag[item].props.style.backgroundColor = 'red';
    })

    // //this.props.checkGreen.map((item, index) => {
    //   console.log(this.props.arrGreen);
      this.props.arrGreen.map((item, index) => {
        answerTag[item].props.style.backgroundColor = 'green';
      })

    //})
 
    return (
            <div className="col s12 l6 m6">
                  <div className="collection">
                    {answerTag}
                </div>
            </div>
            )
  }
}
export default Answers;