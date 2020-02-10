import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import  "./styles/question.css";
import img from "../public/bird.jpg";
class Question extends Component {

  render() {

    const variableBirds = this.props.variableBirds;
    const oneBird = this.props.oneBird;
    const sound = this.props.sound;
    const clrBtn = this.props.clrBtn;
    
    let image = this.props.image;
    let rand = this.props.rand;
    let resultImg;
    let resultName;
    const imageBird = function() {
      if (oneBird === 0) {
        return resultImg =  (<img src={img} className="imgBird" />);
      }
      else if (oneBird === '0' && oneBird == rand) {
        return resultImg =  (<img src={image[clrBtn][rand]} className="imgBird" />);
      }
      else if (oneBird === '1' && oneBird == rand) {
        return resultImg =  (<img src={image[clrBtn][rand]} className="imgBird" />);
      }
      else if (oneBird === '2' && oneBird == rand) {
        return resultImg =  (<img src={image[clrBtn][rand]} className="imgBird" />);
      }
      else if (oneBird === '3' && oneBird == rand) {
        return resultImg =  (<img src={image[clrBtn][rand]} className="imgBird" />);
      }
      else if (oneBird === '4' && oneBird == rand) {
        return resultImg =  (<img src={image[clrBtn][rand]} className="imgBird" />);
      }
      else {
        return resultImg =  (<img src={img} className="imgBird" />);
      }
    };

    const name = function() {
      if (oneBird === 0) {
        return resultName =  (<h3 className="questionH3">****</h3>);
      }
      else if (oneBird === '0' && oneBird == rand) {
        return resultName =  (<h3 className="questionH3">{variableBirds[clrBtn][rand]}</h3>);
      }
      else if (oneBird === '1' && oneBird == rand) {
        return resultName =  (<h3 className="questionH3">{variableBirds[clrBtn][rand]}</h3>);
      }
      else if (oneBird === '2' && oneBird == rand) {
        return resultName =  (<h3 className="questionH3">{variableBirds[clrBtn][rand]}</h3>);
      }
      else if (oneBird === '3' && oneBird == rand) {
        return resultName =  (<h3 className="questionH3">{variableBirds[clrBtn][rand]}</h3>);
      }
      else if (oneBird === '4' && oneBird == rand) {
        return resultName =  (<h3 className="questionH3">{variableBirds[clrBtn][rand]}</h3>);
      }
      else {
        return resultName =  (<h3 className="questionH3">****</h3>);
      }
    }
    imageBird();
    name();
    return (<div className="question">
              <div className="row questionRow"> 
                  <div className="col s12 m12 l4 center-align">
                  {resultImg}
              </div>
              <div className="col s12 m12 l8">
                <div className="row">
                <div className="col s12">
                  {resultName}
                </div>
                  <div className="col s12">
                  <ReactAudioPlayer
                    className="audio"
                    src={sound[clrBtn][rand]}
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