import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { PublishingCard } from "./PublishingCard";

class Publishing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter(
      (item) => item.category === "Publishing"
    );
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div>
        <h3>Publishing</h3>
        <div>
          Explore how writers and publishers are using Kickstarter to bring new
          literature, periodicals, podcasts, and more to life.
        </div>
        <div>FEATURED PROJECT</div>
        <br />
        <div>
          {this.state.data?.map((item) => (
            <PublishingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
Publishing.contextType = DataContext;
export { Publishing };
