import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
class ViewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
    };
  }

  componentDidMount() {
    const { project_id } = this.props.match.params;
    console.log(project_id);
    const { getProjectById } = this.context;
    this.setState({
      project: getProjectById(project_id),
    });
  }

  render() {
    const { project } = this.state;

    console.log(project);
    return !project ? (
      <h3>No product Found</h3>
    ) : (
      <div style={{ border: "1px solid grey" }}>
        <h4> {project.title} </h4>
        <h6> {project.summary} </h6>
        <img style={{ height: "150px" }} src={project.avatar} alt="img" />
        <div> {project.category} </div>
        <div> {project.location} </div>
        <div> {project.funded} </div>
        <div> {project.backers} backers </div>
        <div> {project.daysToGo} days to go </div>
        <div>
          <button>Back this project</button>{" "}
        </div>
        <div>
          <button>Remind me</button>{" "}
        </div>
        <div> {project.story} </div>
        <div>
          {project.photos?.map((item) => (
            <div>
              <img style={{ height: "150px" }} src={item} alt="img" />
            </div>
          ))}{" "}
        </div>
      </div>
    );
  }
}
ViewProject.contextType = DataContext;
export { ViewProject };
