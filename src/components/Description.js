import React, { Component } from "react";
import  "./styles/description.css";

class Description extends Component {

  render() {
    return (
            <div className="col s12 l6 m6 test">
                 <p className="description">
                     <span>Послушайте плеер.</span>
                     <span>Выберите птицу из списка</span>
                 </p>
            </div>
            )
  }
}
export default Description;