import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
class BackThisProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
    };
  }
  componentDidMount() {
    const { project_id } = this.props.match.params;
    const { projects, getProjectById } = this.context;
    this.setState({
      project: getProjectById(project_id),
    });
  }
  render() {
    const { project } = this.state;
    console.log(project);
    return !project ? (
      <h3>No project Found</h3>
    ) : (
      <div>
        <div>
          <h3>{project.title}</h3>
          by {project.by}
        </div>
        <div>
          <div> REWARDS > ADD-ONS > PAYMENT </div>
        </div>
        <div>Select your reward</div>
        <div>Select an option below</div>
        <div>
          <input type="radio" />
          <label>Pledge without a reward</label>
          <br />
          {/* more to add from db.json */}
        </div>
        <div>
          <h5>Backing isn't buying.</h5>
          <h6>You're supporting ambitious creative work.</h6>
          <div>
            Kickstarter isn’t a store. We don’t guarantee projects or
            investigate a creator’s ability to complete them. It’s the
            responsibility of the creator to complete their project as promised,
            and the claims of the project are theirs alone.
          </div>
          <div>Learn more about accountability</div>
          <div>FREQUENTLY ASKED QUESTIONS</div>
          <ul>
            <li>How do I pledge?</li>
            <li>When is my card charged?</li>
            <li>So I'm only charged if funding succeeds?</li>
            <li>What can others see about my pledge?</li>
            <li>What if I want to change my pledge?</li>
            <li>If this project is funded, how do I get my reward?</li>
          </ul>
        </div>
      </div>
    );
  }
}
BackThisProject.contextType = DataContext;
export default BackThisProject;
