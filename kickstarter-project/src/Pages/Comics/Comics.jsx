import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { ComicsCard } from "./ComicsCard";

class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter(
      (item) => item.category === "Comics&Illustration"
    );
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div>
        <h3>Comics&Illustration</h3>
        <div>
          Explore fantastical worlds and original characters from Kickstarter’s
          community of comics creators and illustrators.
        </div>
        <div>FEATURED PROJECT</div>
        <br />
        <div>
          {this.state.data?.map((item) => (
            <ComicsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
Comics.contextType = DataContext;
export { Comics };
