import React, { Component } from "react";
import "./styles/header.css";
import img from "../public/logo.svg";

class Header extends Component {

  render() {
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
                        <li className="col s6 m4 l2"><a href="/#">Разминка</a></li>
                        <li className="col s6 m4 l2"><a href="/#">Воробьиные</a></li>
                        <li className="col s6 m4 l2"><a href="/#">Лесные птицы</a></li>
                        <li className="col s6 m4 l2"><a href="/#">Певчие птицы</a></li>
                        <li className="col s6 m4 l2"><a href="/#">Хищные птицы</a></li>
                        <li className="col s6 m4 l2 active"><a href="/#">Морские птицы</a></li>
                      </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>)
  }
}
export default Header;