import React, { Component } from "react";
import s from "./styles/quastion.css";
import img from "../public/bird.jpg";

class Quastion extends Component {

  render() {
    return (<div className="row"> 
                <div className="col s3">
                    <img src={img} className={s.imgBird} />
                </div>
                <div className="col s9">
                  <p>Score: <b>{this.props.count}</b></p>
                </div>
            </div>)
  }
}
export default Quastion;