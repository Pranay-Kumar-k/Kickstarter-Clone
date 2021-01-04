import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { CategoryCard } from "../CategoryCard";
import Recommended from "../Recommended";

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
      <div
        style={{
          display: "flex",
          margin: "5px 5%",
        }}
      >
        <div>
          <h3>Design & Tech</h3>
          <div>
            From fine design to innovative tech, discover projects from creators
            working to build a more beautiful future.
          </div>
          <div>FEATURED PROJECT</div>
          <br />
          <div>
            {this.state.data?.map((item) => (
              <CategoryCard key={item.id} item={item} {...this.props} />
            ))}
          </div>
        </div>
        <div
          style={{
            // display: "flex",
            maxWidth: "480px",
            margin: "30px 0 0 0px",
            // border: "1px solid black",
          }}
        >
          <Recommended {...this.props} />
        </div>
      </div>
    );
  }
}
Design.contextType = DataContext;
export { Design };
