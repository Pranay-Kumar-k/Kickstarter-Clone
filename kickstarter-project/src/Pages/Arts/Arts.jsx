import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
// import { ArtsCard } from "./ArtsCard";
import { CategoryCard } from "../CategoryCard";
class Arts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter((item) => item.category === "Arts");
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
          //  justifyContent: "space-around" ,
          flexDirection: "row",
          margin: "5px 5%",
        }}
      >
        <div>
          <h3>Arts</h3>
          <div>
            Discover the artists and organizations using Kickstarter to realize
            ambitious projects in visual art and performance.
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
Arts.contextType = DataContext;
export { Arts };

