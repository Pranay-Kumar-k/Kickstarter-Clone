import React from "react";
import { Header } from "./Components/Header";
import Routes from "./Components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Page2 } from "./Components/Pages/StartPage2";
// import { Page3 } from "./Components/Pages/StartPage3";
// import { DashboardNavbar } from "./Components/Pages/Dashboard_Navbar"

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <Page3 /> */}
      {/* <UserDashboard /> */}
    </div>
  );
}
