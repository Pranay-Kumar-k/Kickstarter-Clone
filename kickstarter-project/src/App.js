import React from "react"
import { Header } from "./Components/Header";
import Routes from "./Components/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserDashboard } from "./Components/Pages/UserDashboard";
import Login from "./Components/Login";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes /> */}
      {/* <Page3 /> */}
      {/* <UserDashboard /> */}
      <Login/>
    </div>
  );
}
