// import React, { Component } from "react";
// import { DataContext } from "../../Context/DataContextProvider";
// import { DesignCard } from "./DesignCard";

// class Design extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     const { projects } = this.context;
//     const updateState = projects.filter(
//       (item) => item.category === "Design&Tech"
//     );
//     console.log(updateState);
//     this.setState({
//       data: updateState,
//     });
//   }
//   render() {
//     return (
//       <div style={{margin:"5px 5%"}}>
//         <h3>Design&Tech</h3>
//         <div>
//           From fine design to innovative tech, discover projects from creators
//           working to build a more beautiful future.
//         </div>
//         <div>FEATURED PROJECT</div>
//         <br />
//         <div>
//           {this.state.data?.map((item) => (
//             <DesignCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// Design.contextType = DataContext;
// export { Design };


import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
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
      <div
        style={{
<<<<<<< HEAD
          display: "flex",margin:"5px 5%"
        }}
      >
        <div>
          <h3>Design & Tech</h3>
=======
          display: "flex",
        }}
      >
        <div>
          <h3>Design&Tech</h3>
>>>>>>> df323192d1688bb90b2c75dea0aadd58a94efed2
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
Design.contextType = DataContext;
export { Design };