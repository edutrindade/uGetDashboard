import React, { Component } from "react";

import Header from "../../components/Header";
//import Page from "../../components/Page";
import Dashboard from "../dashboard/";

import "./styles.css";

export default class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <Header />
        <Dashboard />
      </div>
    );
  }
}
