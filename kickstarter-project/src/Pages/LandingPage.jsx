import React, { Component } from "react";
// import styled from "styled-components";
import { Redirect } from "react-router-dom";
// import Projects from "./Projects";
import { DataContext } from "../Context/DataContextProvider";
import Recommended from "./Recommended";
import LandingProjects from "./LandingProjects";
class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.context;
    // console.log(this.props);
    return (
      <div>
        <div
          style={{
            margin: "30px 0 0 60px",
            float: "left",
            // border: "1px solid black",
            maxWidth: "750px",
          }}
        >
          <h6>FEATURED PROJECT</h6>
          {projects?.map((item) => (
            <LandingProjects key={item.id} item={item} {...this.props} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: "480px",
            margin: "30px 0 0 20px",
            // border: "1px solid black",
          }}
        >
          <Recommended />
        </div>
      </div>
    );
  }
}
LandingPage.contextType = DataContext;
export { LandingPage };
