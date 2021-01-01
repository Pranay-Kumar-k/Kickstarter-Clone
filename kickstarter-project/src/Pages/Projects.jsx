import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = {
  border: "1px solid #3333333",
  height: "auto",
  width: "50%",
  margin: "20px 0px 20px 10px",
  display: "grid",
};

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  viewProject = (id) => {
    const { history } = this.props;
    // console.log(this.props);
    console.log("id: ", id);
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
        <div style={Card} onClick={() => this.viewProject(id)}>

          <div>
            <img src={avatar} />{" "}
          </div>
          <h5 style={{  }}>{title} </h5>
          <div style={{ fontSize:"20px", borderCollapse:"collapse" }}>{summary} </div>
          <div style={{color:"grey",fontSize:"15px"}}> by {by} </div>
        </div>
      </div>
    );
  }
}

export default Projects;
