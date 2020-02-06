import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import  "./styles/question.css";
import img from "../public/bird.jpg";

class Question extends Component {

  render() {
    return (<div className="question">
              <div className="row questionRow"> 
                  <div className="col s12 m12 l4 center-align">
                      <img src={img} className="imgBird" />
                  </div>
                  <div className="col s12 m12 l8">
                    <div className="row">
                    <div className="col s12">
                      <h3 className="questionH3">****</h3>
                    </div>
                      <div className="col s12">
                      <ReactAudioPlayer
                        className="audio"
                        src={this.props.sound}
                        controls
                      />
                      </div>
                    </div>
                  </div>
              </div>
            </div>)
  }
}
export default Question;