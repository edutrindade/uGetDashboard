import React, { Component } from "react";

import Header from "../../components/Header";
import Closing from "./index";

import "./styles.css";

export default class ClosingEvents extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <Header />
        <Closing />
      </div>
    );
  }
}
