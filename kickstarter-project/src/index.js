
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {DataContextProvider} from "./Context/DataContextProvider"


const rootElement = document.getElementById("root");
ReactDOM.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </DataContextProvider>
  ,
  rootElement
);
