import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import styles from "./ViewProject.module.css";
import { NavLink } from "react-router-dom";
import BackThisProject from "./BackThisProject";
class ViewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      flag: false,
      backed: false,
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
  back = () => {
    this.setState({
      backed: true,
    });
  };
  handleRemind = () => {
    alert(`You’ve saved this project, but still need to verify your email address to receive reminders about it. 
Check your inbox to finish this important step.`);
    const { flag } = this.state;
    this.setState({
      flag: !flag,
    });
  };
  render() {
    const { project, flag, backed } = this.state;
    const links = [
      {
        title: "Campaign",
        to: "/campaign",
      },
      {
        title: "FAQ",
        to: "/faq",
      },
      {
        title: "Updates",
        to: "/updates",
      },
      {
        title: "Comments",
        to: "/comments",
      },
      {
        title: "Community",
        to: "/community",
      },
    ];

    return backed ? (
      <BackThisProject {...this.props} />
    ) : !project ? (
      <h3>No project Found</h3>
    ) : (
          <div>
            <div>
              <h2 className={styles.header}> {project.title} </h2>
              <h4 className={styles.header}> {project.summary} </h4>
              <div>
                <div style={{ float: "left",width:"60%",height:"auto" }}>
                  <img className={styles.avatar} src={project.avatar} alt="img" />
                </div>

                <div style={{ float: "right",width:"38%",height:"auto" }}>
                  <div className={styles.right}>
                    <div className={styles.line}></div>
                    <div className={styles.gap}>
                      <div className={styles.funding}>{project.funded}</div>
                      <div> pledged of {project.pledged} goal </div>
                    </div>
                    <div className={styles.gap}>
                      <div className={styles.backers}>{project.backers}
                      </div> backers </div>
                    <div className={styles.gap}>
                      <div className={styles.days}>{project.daysToGo}</div> days to go</div>
                    <div className={styles.gap}>
                      <button onClick={this.back} className={styles.btn1}>Back this project</button>
                    </div>
                    <div className={styles.gap}>
                      <div className={styles.social}>
                        <button onClick={this.handleRemind} className={styles.btn2}>
                          {flag ? "Saved" : "Remind me"}
                        </button>
                        <img  src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                        <img  src="https://img.icons8.com/color/48/000000/twitter--v2.png" />
                        <img  src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png" />
                      </div>
                      <div className={styles.sideText}>
                        All or nothing. This project will only be funded if it reaches
                        its goal by
                <br /> Tue, January 5 2021 10:46 PM UTC +05:30.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{clear:"both"}}>
                <div className={styles.tag}>
                  <div>📷 {project.category} </div>
                  <div>📍 {project.location} </div>
                </div>
              </div>
            </div>
            <div className={styles.nav}>
              {links.map((e) => (
                <NavLink
                  style={{  color: "grey", marginTop:"10px", textDecoration: "none" }}
                  to={e.to}
                >
                  {e.title}{" "}
                </NavLink>
              ))}
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.storyBox}>
                <div
                  style={{
                    marginLeft: "50px",
                    textAlign: "left",
                    paddingTop: "20px",
                  }}
                >
                  Story
            </div>
                <div className={styles.story}> {project.story} </div>
                <div className={styles.story}>
                  {project.photos?.map((item) => (
                    <div>
                      <img
                        style={{
                          height: "450px",
                          marginTop: "30px",
                          maxWidth: "800px",
                        }}
                        src={item}
                        alt="img"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        );
  }
}
ViewProject.contextType = DataContext;
export { ViewProject };
