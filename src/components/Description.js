import React, { Component } from "react";
import  "./styles/description.css";

class Description extends Component {
  render() {
    let description;

    if (this.props.curAnswerImg === null) {
      return description = (
          <div className="col s12 l6 m6">
            <div className="row" id="descriptionRow">
              <p className="descriptionP">
                  <span>Послушайте плеер.</span>
                  <span>Выберите птицу из списка</span>
              </p>
            </div>
        </div>
        );
      }
      else if (this.props.curAnswerImg != null) {
        return description = (
          <div className="col s12 l6 m6">
            <div className="row" id="descriptionRow">
              <div className="col s12 m12 l5 center-align">
                  <img src={this.props.image[this.props.clrBtn][this.props.curAnswerImg]} className="imgBird" />     
              </div>
              <div className="col s12 m12 l7 center-align">
                  <h4>{this.props.variableBirds[this.props.clrBtn][this.props.curAnswerImg]}</h4>
                  <p>{this.props.lat[this.props.clrBtn][this.props.curAnswerImg]}</p>
                  <hr/>  
              </div>
              <div className="col s12 m12 l12">
                  <span>{this.props.infoBirds[this.props.clrBtn][this.props.curAnswerImg]}</span>
              </div>
            </div>
        </div>
        )
      }
      return    (
                {description}
                )
  }
}
export default Description;