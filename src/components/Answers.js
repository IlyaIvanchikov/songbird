import React, { Component } from "react";
import  "./styles/answers.css";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   test : this.props.clrTag
    // }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.descAnswer(e.target.id);
    this.props.clrTag(e.target.id);
    // this.setState({
    //   test: e.target.id
    //  });
  };

  render() {
    const variableBirds = this.props.variableBirds;
    const rand = this.props.rand;
    console.log(this.props.clrTag);
    const answerTag = variableBirds[this.props.clrBtn].map((item, index) => (
      <a href="#!" className="collection-item" id={index} key={index} style={{backgroundColor: "#008966"}} onClick={this.handleClick}>{item}</a>
    ));
      //console.log(this.props.clrTag);
      if (this.props.clrTag == rand) {
        answerTag[rand].props.style.backgroundColor = 'green';
      }
      else if (this.props.clrTag != null &&  this.props.clrTag != rand) {
        answerTag[this.props.clrTag].props.style.backgroundColor = 'red';
      }
   
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