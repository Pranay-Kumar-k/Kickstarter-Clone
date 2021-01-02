import React, { Component } from "react";
// import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Projects from "./Projects";
import { DataContext } from "../Context/DataContextProvider";
import Recommended from "./Recommended";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.context;
    // console.log(this.props);
    return (
      <div>
        <div>
          <div
            style={{
              margin: "30px 0 0 60px",
              float: "left",
              // border: "1px solid black",
              maxWidth: "50%",
            }}
          >
            <h6 style={{ marginLeft: "20px" }}>FEATURED PROJECT</h6>
            <div>
              {projects?.map((item) => (
                <Projects key={item.id} item={item} {...this.props} />
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "48%",
              margin: "30px 0 0 20px",
              // border: "1px solid black",
            }}
          >
            <Recommended />
          </div>
        </div>
      </div>
    );
  }
}
Home.contextType = DataContext;
export { Home };
