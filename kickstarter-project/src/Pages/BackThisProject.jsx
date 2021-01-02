import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import { Redirect } from "react-router-dom";
class BackThisProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      flag1: false,
      flag2: false,
      flag3: false,
    };
  }
  componentDidMount() {
    const { project_id } = this.props.match.params;
    const { projects, getProjectById } = this.context;
    this.setState({
      project: getProjectById(project_id),
    });
  }
  handleClick1 = () => {
    this.setState({
      flag1: true,
    });
  };
  handleClick2 = () => {
    this.setState({
      flag2: true,
    });
  };
  handleClick3 = () => {
    this.setState({
      flag3: true,
    });
  };
  submit = () => {
    const { history } = this.props;
    history.push("/transaction");
  };
  render() {
    const { project, flag1, flag2, flag3 } = this.state;
    console.log(project);
    return !project ? (
      <h3>No project Found</h3>
    ) : (
      <div>
        <div
          style={{
            background: "Gainsboro",
            height: "100px",
            textAlign: "center",
            padding: "11px",
          }}
        >
          <h3>{project.title}</h3>
          by {project.by}
        </div>

        <div style={{ marginLeft: "100px" }}>
          <div style={{ margin: "20px 0 70px 0" }}>
            <div> REWARDS > ADD-ONS > PAYMENT </div>
          </div>
          <h5>Select your reward</h5>
          <div>Select an option below</div>
          <div
            style={{
              border: "1px solid Gainsboro",
              height: "70px",
              width: "800px",
              padding: "15px",
            }}
          >
            <input type="radio" onChange={this.handleClick1} />{" "}
            <label> Pledge without a reward</label>
            {flag1 ? (
              <>
                <input type="number" placeholder="Enter pledge amount" />
                <button onClick={this.submit}>Pledge</button>{" "}
              </>
            ) : null}
            <br />
          </div>
          <br />
          <div
            style={{
              border: "1px solid Gainsboro",
              height: "180px",
              width: "800px",
              padding: "15px",
            }}
          >
            <input type="radio" onChange={this.handleClick2} />{" "}
            <label> Pledge $50 or more</label>
            <br />
            <div>Premium membership on Kickstarter for 1 month</div>
            <br />
            <div> {project.backers} backers </div>
            <br />
            {flag2 ? (
              <>
                <input type="number" placeholder="Enter pledge amount" />
                <button onClick={this.submit}>Pledge $50</button>{" "}
              </>
            ) : null}
          </div>
          <br />
          <div
            style={{
              border: "1px solid Gainsboro",
              height: "180px",
              width: "800px",
              padding: "15px",
            }}
          >
            <input type="radio" onChange={this.handleClick3} />{" "}
            <label> Pledge $200 or more</label>
            <br />
            <div>Premium membership on Kickstarter for 1 year</div>
            <br />
            <div> {Number(project.backers) * 30} backers </div>
            <br />
            {flag3 ? (
              <>
                <input type="number" placeholder="Enter pledge amount" />
                <button onClick={this.submit}>Pledge $200</button>{" "}
              </>
            ) : null}
          </div>
          <div>
            <h5>Backing isn't buying.</h5>
            <h6>You're supporting ambitious creative work.</h6>
            <div>
              Kickstarter isn’t a store. We don’t guarantee projects or
              investigate a creator’s ability to complete them. It’s the
              responsibility of the creator to complete their project as
              promised, and the claims of the project are theirs alone.
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
      </div>
    );
  }
}
BackThisProject.contextType = DataContext;
export default BackThisProject;
