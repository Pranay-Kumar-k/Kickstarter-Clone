
import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
import { ArtsCard } from "./ArtsCard";
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
    return (
      <div
        style={{
          display: "flex",
          //  justifyContent: "space-around" ,
<<<<<<< HEAD
          flexDirection: "row",margin:"5px 5%"
=======
          flexDirection: "row",
>>>>>>> df323192d1688bb90b2c75dea0aadd58a94efed2
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
              <ArtsCard key={item.id} item={item} />
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
Arts.contextType = DataContext;
export { Arts };
