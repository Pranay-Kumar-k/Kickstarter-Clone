import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Context/DataContextProvider";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuth, handleLogOut } = this.context;
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          height: "50px",
          width: "100%",
          color: "black",
          textDecoration: "none",
        }}
      >
        <div style={{ marginTop: "15px" }}>
          <NavLink
            exact
            style={{ padding: 10, color: "black", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", color: "seagreen" }}
            to="/explore"
          >
            Explore
          </NavLink>
          <NavLink
            exact
            style={{ padding: 10, color: "black", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", color: "seagreen" }}
            to="/start"
          >
            Start A Project
          </NavLink>
        </div>
        <div style={{ margin: "auto" }}>
          <div>
            <NavLink
              exact
              style={{
                textAlign: "center",
                color: "black",
                textDecoration: "none",
              }}
              activeStyle={{ fontWeight: "bold", textDecoration: "underlined" }}
              to="/home"
            >
              <div>
                <img src="https://imgur.com/crPcFmx.jpg" alt="img" />
              </div>
              <div>#BlackLivesMatter</div>
            </NavLink>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            style={{ border: "none", width: "50px" }}
            type="text"
            placeholder="Search"
          />
          <NavLink
            exact
            style={{
              padding: 10,
              color: "black",
              textDecoration: "none",
              marginRight: "50px",
            }}
            activeStyle={{ fontWeight: "bold", color: "seagreen" }}
            to="/login"
          >
            <div onClick={handleLogOut}>{isAuth ? "Log out" : "Log in"}</div>
          </NavLink>
        </div>
      </div>
    );
  }
}
Header.contextType = DataContext;
export { Header };
