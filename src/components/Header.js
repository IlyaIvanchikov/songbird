import React, { Component } from "react";
import "./styles/header.css";
import img from "../public/logo.svg";

class Header extends Component {

  render() {
      const typeBirds = this.props.typeBirds;
      const clrBtn = this.props.clrBtn;

      const users = typeBirds.map((item, index) => (
        <li key={index} className="col s6 m4 l2" style={{backgroundColor: "#008966"}}><a href="/#">{item}</a></li>
      ));
      users.map((el, index) => {
        if (index === this.props.clrBtn) {
          el.props.style.backgroundColor = 'green';
        }
      });
    return (<div className="main">
    <div className="row" > 
                <div className="col s6">
                    <img src={img} className="imgHeader" />
                </div>
                <div className="col s6 right-align" >
                  <h5 className="h5" >Score: <span>{this.props.count}</span></h5>
                </div>
                <div className="col s12">
                  <div className="row navRow">
                    <div className="navtest" >
                      <ul className="navUl">
                      {users}
                      </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>)
  }
}
export default Header;