import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { DesignCard } from "./DesignCard";

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter(
      (item) => item.category === "Design&Tech"
    );
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div>
        <h3>Design&Tech</h3>
        <div>
          From fine design to innovative tech, discover projects from creators
          working to build a more beautiful future.
        </div>
        <div>FEATURED PROJECT</div>
        <br />
        <div>
          {this.state.data?.map((item) => (
            <DesignCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
Design.contextType = DataContext;
export { Design };
