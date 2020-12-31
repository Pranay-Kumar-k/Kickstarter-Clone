import React from "react";
import { NavLink } from "react-router-dom";
import Example from "./PopOver";

function UserDashboard() {
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
          style={{ padding: 10, color: "black", textDecoration: "none",fontSize:"14px" }}
          activeStyle={{ fontWeight: "normal", color: "seagreen" }}
          to="/explore"
        >
          FAQ
        </NavLink>
        <NavLink
          exact
          style={{ padding: 10, color: "black", textDecoration: "none" ,fontSize:"14px"}}
          activeStyle={{ fontWeight: "normal", color: "seagreen" }}
          to="/"
        >
          Rules
        </NavLink>
        <NavLink
          exact
          style={{ padding: 10, color: "black", textDecoration: "none",fontSize:"14px" }}
          activeStyle={{ fontWeight: "normal", color: "seagreen" }}
          to="/start"
        >
          Handbook
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
            activeStyle={{ fontWeight: "normal", textDecoration: "underlined" }}
            to="/home"
          >
            <div>
              <img src="https://imgur.com/crPcFmx.jpg" alt="img"/>
            </div>
            <div>#BlackLivesMatter</div>
          </NavLink>
        </div>
      </div>
      <div style={{ marginTop: "20px",marginRight:"30px" }}>
        <Example />
      </div>
    </div>
  );
}

export { UserDashboard };
