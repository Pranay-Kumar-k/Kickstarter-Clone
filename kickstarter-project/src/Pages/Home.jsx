import React, { Component } from "react";
// import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Projects from "./Projects";
import { DataContext } from "../Context/DataContextProvider";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //     const {data}
  // }

  render() {
    const { projects } = this.context;
    // console.log(this.props);
    return (
      <div>
        <h3>FEATURED PROJECT</h3>
        {projects?.map((item) => (
          <Projects key={item.id} item={item} {...this.props} />
        ))}
      </div>
    );
  }
}
Home.contextType = DataContext;
export { Home };
