import React, { Component } from "react";
import s from "./styles/header.css";
import img from "../public/logo.svg";

class Header extends Component {

  render() {
    return (<div className="row" className={s.main}> 
                <div className="col s6">
                    <img src={img} className={s.imgHeader} />
                </div>
                <div className="col s6 right-align" >
                  <h5 className={s.h5} >Score: <span>{this.props.count}</span></h5>
                </div>
                <div className="col s12">
                  <div className="row">
                    <div className={s.navtest} >
                      <ul className={s.navUl}>
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
            </div>)
  }
}
export default Header;