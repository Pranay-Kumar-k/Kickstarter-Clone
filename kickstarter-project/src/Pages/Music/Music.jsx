import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { CategoryCard } from "../CategoryCard";
import Recommended from "../Recommended";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter((item) => item.category === "Music");
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: "flex",
          margin: "5px 5%",
        }}
      >
        <div>
          <h3>Music</h3>
          <div>
            Discover new albums, performances, and independent venues from
            creators using Kickstarter to shape the future of sound.
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
          <Recommended />
        </div>
      </div>
    );
  }
}
Music.contextType = DataContext;
export { Music };
