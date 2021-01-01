// import React, { Component } from "react";
// import { DataContext } from "../../Context/DataContextProvider";
// import { ComicsCard } from "./ComicsCard";

// class Comics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     const { projects } = this.context;
//     const updateState = projects.filter(
//       (item) => item.category === "Comics&Illustration"
//     );
//     console.log(updateState);
//     this.setState({
//       data: updateState,
//     });
//   }
//   render() {
//     return (
//       <div style={{margin:"5px 5%"}}>
//         <h3>Comics & Illustration</h3>
//         <div>
//           Explore fantastical worlds and original characters from Kickstarter’s
//           community of comics creators and illustrators.
//         </div>
//         <div>FEATURED PROJECT</div>
//         <br />
//         <div>
//           {this.state.data?.map((item) => (
//             <ComicsCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// Comics.contextType = DataContext;
// export { Comics };


import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
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
      <div
        style={{
          display: "flex",margin:"5px 5%"
        }}
      >
        <div>
          <h3>Comics & Illustration</h3>
          <div>
            Explore fantastical worlds and original characters from
            Kickstarter's community of comics creators and illustrators.
          </div>
          <div>FEATURED PROJECT</div>
          <br />
          <div>
            {this.state.data?.map((item) => (
              <ComicsCard key={item.id} item={item} />
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
Comics.contextType = DataContext;
export { Comics };