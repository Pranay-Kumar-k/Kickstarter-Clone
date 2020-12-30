import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
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
          activeStyle={{ fontWeight: "bold", color: "red" }}
          to="/explore"
        >
          Explore
        </NavLink>
        <NavLink
          exact
          style={{ padding: 10, color: "black", textDecoration: "none" }}
          activeStyle={{ fontWeight: "bold", color: "red" }}
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
              <img src="https://imgur.com/crPcFmx.jpg" />
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
          activeStyle={{ fontWeight: "bold", color: "red" }}
          to="/login"
        >
          Log in
        </NavLink>
      </div>
    </div>
  );
}

export { Header };
