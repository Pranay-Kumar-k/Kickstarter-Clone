import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import styles from "./ViewProject.module.css";
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
      <div>
        <div className={styles.box}>
          <h2 className={styles.header}> {project.title} </h2>
          <h4 className={styles.header}> {project.summary} </h4>
          <img className={styles.avatar} src={project.avatar} alt="img" />
          <div className={styles.right}>
            <div className={styles.line}></div>
            <div className={styles.gap}>
              <div className={styles.funding}>{project.funded}</div>
            </div>
            <div className={styles.gap}>
              <div className={styles.backers}>{project.backers}</div> backers
            </div>
            <div className={styles.gap}>
              <div className={styles.days}>{project.daysToGo}</div> days to go
            </div>
            <div className={styles.gap}>
              <button className={styles.btn1}>Back this project</button>
            </div>
            <div className={styles.gap}>
              <button className={styles.btn2}>Remind me</button>
            </div>
          </div>
          <div className={styles.tag}>
            <div>📷 {project.category} </div>
            <div>📍 {project.location} </div>
          </div>
        </div>
        <div className={styles.nav}>
          {["Campaign", "FAQ", "Updates", "Comments", "Community"].map((e) => (
            <div>{e} </div>
          ))}
        </div>
        <div className={styles.storyBox}>
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
    );
  }
}
ViewProject.contextType = DataContext;
export { ViewProject };
