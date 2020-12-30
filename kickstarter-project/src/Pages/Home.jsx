import React, { Component } from "react";
// import styled from "styled-components";
import { Redirect } from "react-router-dom";
import data from "../Context/db.json";
import Projects from "./Projects";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data],
    };
  }

  render() {
    const { data } = this.state;
    console.log(this.props);
    return (
      <div>
        <h3>FEATURED PROJECT</h3>
        {data?.map((item) => (
          <Projects key={item.id} item={item} {...this.props} />
        ))}
      </div>
    );
  }
}

export { Home };
