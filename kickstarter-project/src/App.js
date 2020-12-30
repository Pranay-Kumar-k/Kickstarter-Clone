
import React from "react"
import StartAProject from "./Components/Pages/StartAProject"
import 'bootstrap/dist/css/bootstrap.min.css';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

import React from "react";
// import "./styles.css";
import { Header } from "./Components/Header";
import Routes from "./Components/Routes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <StartAProject />
    </div>
  );
}
