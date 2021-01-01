import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { MusicCard } from "./MusicCard";

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
    return (
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
            <MusicCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
Music.contextType = DataContext;
export { Music };
