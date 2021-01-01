import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
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
    );
  }
}
Arts.contextType = DataContext;
export { Arts };

// export const Arts = (props) => {
//   return (
//     <DataContext.Consumer>
//       {({ projects }) => {
//         return (
//           <Container>
//             {projects()?.map((prod) => (
//               <ProductItem key={prod.id} item={prod} {...props} />
//             ))}
//           </Container>
//         );
//       }}
//     </DataContext.Consumer>
//   );
// };
