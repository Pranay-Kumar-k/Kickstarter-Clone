import React, { Component } from "react";

class RecommendedCard extends Component {
  constructor(props) {
    super(props);
  }

  viewProject = (id) => {
    const { history } = this.props;
    console.log(this.props);
    const { url } = this.props.match;
    history.push(`${url}/${id}`);
  };
  render() {
    const { avatar, title, id, funded, pledged, by } = this.props.item;
    return (
      <div onClick={() => this.viewProject(id)}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              style={{ width: "140px", height: "100px", marginRight: "10px" }}
              src={avatar}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 0px",
            }}
          >
            <div>{title} </div>
            <div>{(Number(funded) / Number(pledged)).toFixed(2) * 100}% </div>
            <div>By: {by} </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "grey",
            height: "1px",
            width: "100%",
            margin: "5px 0px",
          }}
        ></div>
      </div>
    );
  }
}

export { RecommendedCard };
