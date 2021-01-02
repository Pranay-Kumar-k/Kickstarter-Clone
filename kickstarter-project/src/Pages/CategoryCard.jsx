import React, { Component } from "react";

class CategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  viewProject = (id) => {
    const { history } = this.props;

    const { url } = this.props.match;
    history.push(`${url}/${id}`);
  };
  render() {
    const { avatar, title, summary, by, id } = this.props.item;
    return (
      <div onClick={() => this.viewProject(id)}>
        <div>
          <img src={avatar} />
        </div>
        <h3>{title} </h3>
        <div>{summary} </div>
        <div>By: {by} </div>
        <br />
      </div>
    );
  }
}

export { CategoryCard };
