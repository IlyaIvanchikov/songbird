import React, { Component } from "react";
import s from "./styles/header.css";
import img from "../public/1.png";

class Header extends Component {

  render() {
    return (<div className="row"> 
                <div className="col s6">
                    <img src={img} />
                </div>
                <div className="col s6"></div>
                <div className="col s12"></div>
            </div>)
  }
}
export default Header;