import React from "react";

const footer = {
  borderBottom: "1px solid grey",
  background: "white",
  width: "100%",
  height: "400px",
  color: "grey",
};

const flex = {
  display: "flex",
  flexDirection: "column",
  marginTop: "50px",
};

export const Footer = () => {
  return (
    <div style={footer}>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        <div style={flex}>
          <h3>ABOUT</h3>
          <div>About us</div>
          <div>Our charter</div>
          <div>Stats</div>
          <div>Press</div>
          <div>Jobs</div>
        </div>
        <div style={flex}>
          <h3>SUPPORT</h3>
          <div>Help Center</div>
          <div>Our Rules</div>
          <div>Creator Handbook</div>
          <div>Patrons</div>
          <div>Brand assets</div>
        </div>
        <div style={flex}>
          <h3>MORE FROM KICKSTARTER</h3>
          <div>Newsletters</div>
          <div>Kickstarter Magazine</div>
          <div>The Creative Independent</div>
          <div>Mobile ads</div>
          <div>Research</div>
        </div>
      </div>
    </div>
  );
};
