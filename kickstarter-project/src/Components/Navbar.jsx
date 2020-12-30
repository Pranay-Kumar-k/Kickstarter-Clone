import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/arts",
    title: "Arts",
  },
  {
    to: "/comics",
    title: "Comics & Illustration",
  },
  {
    to: "/design",
    title: "Design & Tech",
  },
  {
    to: "/film",
    title: "Film",
  },
  {
    to: "/food",
    title: "Food & Craft",
  },
  {
    to: "/games",
    title: "Games",
  },
  {
    to: "/music",
    title: "Music",
  },
  {
    to: "/publishing",
    title: "Publishing",
  },
  {
    to:"/start",
    title:""
  }
];

function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        borderBottom: "1px solid grey",
        borderTop: "1px solid grey",
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      <div style={{ marginTop: "20px" }}>
        {links.map((link) => (
          <NavLink
            exact
            style={{ padding: 20, color: "grey", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", color: "red" }}
            key={link.to}
            to={link.to}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export { Navbar };
