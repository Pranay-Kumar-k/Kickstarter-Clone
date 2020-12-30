
import React from "react"
import { Header } from "./Components/Header";
import Routes from "./Components/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page1 } from "./Components/Pages/StartPage1";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes /> */}
      <Page1 />
    </div>
  );
}
