import React, { Component } from 'react';
import "./assets/style.css";
import  ReactDom from "react-dom";

class QuizBee extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
      </div>
    );
  }
}

ReactDom.render(<QuizBee />, document.getElementById("root"));
