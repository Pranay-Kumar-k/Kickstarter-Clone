import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import { RecommendedCard } from "./RecommendedCard";
import { Pagination } from "./Pagination";
class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  handlePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    const { projects } = this.context;
    const perPage = 3;
    const { currentPage } = this.state;
    const totalPages = Math.ceil(projects.length / perPage);
    return (
      <div>
        <div>Recommended for you</div>
        <div>
          {" "}
          {projects
            .map((item) => <RecommendedCard item={item} />)
            .filter(
              (_, index) =>
                index >= (currentPage - 1) * perPage &&
                index < currentPage * perPage
            )}{" "}
        </div>
        <div style={{ textAlign: "right" }}>
          <Pagination
            handlePage={this.handlePage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    );
  }
}
Recommended.contextType = DataContext;
export default Recommended;
