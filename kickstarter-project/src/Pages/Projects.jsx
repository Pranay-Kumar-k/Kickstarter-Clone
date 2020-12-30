import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #3333333;
  height: 400px;
  width: 90%;
  margin: auto;
  margin-top: 15px;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr;
`;

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  viewProject = (id) => {
    const { history } = this.props;
    console.log(this.props);
    console.log(id);
    const { url } = this.props.match;
    history.push(`${url}/${id}`);
  };
  render() {
    const {
      id,
      title,
      summary,
      avatar,
      explore,
      category,
      location,
      funded,
      backers,
      daysToGo,
      photos,
      story,
      by,
    } = this.props.item;
    return (
      <div>
        <Card onClick={() => this.viewProject(id)}>
          <div>
            <img src={avatar} />{" "}
          </div>
          <div>{title} </div>
          <div>{summary} </div>
        </Card>
        <div>{by} </div>
      </div>
    );
  }
}

export default Projects;
