import React, { Component } from "react";
import  "./styles/answers.css";
let red = [];
let green = [];
class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.descAnswer(e.target.id);
  };

  render() {

    const variableBirds = this.props.variableBirds;
    const clrBtn = this.props.clrBtn;
    const arrRed = this.props.arrRed;

    const answerTag = variableBirds[clrBtn].map((item, index) => (
      <a href="#!" className="collection-item" id={index} key={index} style={{backgroundColor: "#008966"}} onClick={this.handleClick}>{item}</a>
    ));

    this.props.arrRed.map((item, index) => {
        return answerTag[item].props.style.backgroundColor = "red";
      })
    this.props.arrGreen.map((item, index) => {
        return answerTag[item].props.style.backgroundColor = "green";
      })

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