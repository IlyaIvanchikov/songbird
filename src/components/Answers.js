import React, { Component } from "react";
import  "./styles/answers.css";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      variableBirds: this.props.variableBirds
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.desc(e.target.id);
    //console.log(e.target.id);
  };

  render() {
    return (
            <div className="col s12 l6 m6">
                  <div className="collection">
                    {this.state.variableBirds.map((item, index) => (
                      <a href="#!" className="collection-item" id={index} key={index} onClick={this.handleClick}>{item}</a>
                    ))}
                </div>
            </div>
            )
  }
}
export default Answers;