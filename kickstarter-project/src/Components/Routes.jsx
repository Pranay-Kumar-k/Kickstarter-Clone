import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Home } from "./../Pages/Home";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ViewProject } from "../Pages/ViewProject";
import {StartAProject} from "./Pages/StartAProject";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route
          path="/home/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route path="/start" render={()=> <StartAProject />}/>
        {/* <Route path="/projects" component={Projects} /> */}
        {/* <Route path="/arts" render={() => <Arts />} />
        <Route path="/comics" render={() => <Comics />} />
        <Route exact path="/design" render={() => <Design />} />
        <Route exact path="/film" render={() => <Film />} />
        <Route exact path="/food" render={() => <Food />} />
        <Route exact path="/games" render={() => <Games />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/publishing" render={() => <Publishing />} /> */}
        <Route render={() => <h3>Error: 404. Page not found</h3>} />
      </Switch>
      <Navbar />
      <Footer />
    </div>
  );
};
export default Routes;
