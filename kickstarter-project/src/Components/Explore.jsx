import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
class Explore extends Component {
  render() {
    const { projects } = this.context;
    return <div>Explore</div>;
  }
}
Explore.contextType = DataContext;
export { Explore };
