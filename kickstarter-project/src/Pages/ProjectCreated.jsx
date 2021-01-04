import React from "react";
import { NavLink } from "react-router-dom";
const ProjectCreated = () => {
  return (
    <div>
      <h4>Project</h4>
      <div>Project Status</div>
      <div
        style={{
          background: "Gainsboro",

          textAlign: "center",
        }}
      >
        <br />
        💚
        <h3>Take a moment to review our rules</h3>
        <div>Here are five rules every Kickstarter project must follow.</div>
        <br />
        <br />
        <ol>
          <p>
            <li>Projects must create something to share with others.</li>
            <br />
          </p>
          <p>
            <li>Projects must be honest and clearly presented.</li>
            <br />
          </p>
          <p>
            <li>Projects can't fundraise for charity.</li>
            <br />
          </p>
          <p>
            <li>Projects can't offer equity.</li>
            <br />
          </p>
          <p>
            <li>Projects can't involve prohibited items.</li>
            <br />
          </p>
        </ol>
        <NavLink to="/home">
          <button
            style={{
              background: "seagreen",
              border: "none",
              height: "40px",
              width: "150px",
            }}
          >
            Got it
          </button>
        </NavLink>
        <div>Read more about our rules.</div>
        <br />
        <br />
      </div>
    </div>
  );
};
export { ProjectCreated };
