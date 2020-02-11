import React, { Component } from "react";
import "./styles/finishFrame.css";

class FinishFrame extends Component {

  render() {
      let result;
      if (this.props.score == 24) {
        return result = (
        <div className="col s12 center-align finishFrame">
            <h1 className="fFh1">Поздравляем!</h1>
            <p className="fFp">Вы истинный знаток пения птиц!!!</p>
        </div>
        )
      }
      return result = (
        <div className="col s12 center-align finishFrame">
        <h1 className="fFh1">Поздравляем!</h1>
        <p className="fFp">Вы прошли викторину и набрали  {this.props.score} из 24 возможных баллов</p>
        <hr/>
        <a className="waves-effect waves-light btn fFBtn" href="/">Попробуйте еще раз!</a>
        </div>
        )
    return (
        {result}
    )
  }
}
export default FinishFrame;