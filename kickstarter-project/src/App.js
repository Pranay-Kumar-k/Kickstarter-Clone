import React from "react"
import StartAProject from "./Components/Pages/StartAProject"
import 'bootstrap/dist/css/bootstrap.min.css';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
function App() {
  return (
    <div>
      <StartAProject />
    </div>
  );
}

export default App;
