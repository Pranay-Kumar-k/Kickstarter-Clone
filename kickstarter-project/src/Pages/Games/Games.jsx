import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
import { GamesCard } from "./GamesCard";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter((item) => item.category === "Games");
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
        }}
      >
        <div>
          <h3>Games</h3>
          <div>
            From tabletop adventures to beloved revivals, discover the projects
            forging the future of gameplay.
          </div>
          <div>FEATURED PROJECT</div>
          <br />
          <div>
            {this.state.data?.map((item) => (
              <GamesCard key={item.id} item={item} />
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
Games.contextType = DataContext;
export { Games };
