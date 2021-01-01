
import React from "react";
import { Header } from "./Components/Header";
import Routes from "./Components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";



require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <UserDashboard /> */}
<<<<<<< HEAD

      {/* <Header />
      <Routes /> */}
      {/* <Page3 /> */}
      {/* <UserDashboard /> */}
      {/* <Login/> */}

=======
>>>>>>> df323192d1688bb90b2c75dea0aadd58a94efed2
    </div>
  );
}
