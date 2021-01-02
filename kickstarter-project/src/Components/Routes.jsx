import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Home } from "./../Pages/Home";
import { ProjectCreated } from "./../Pages/ProjectCreated";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ViewProject } from "../Pages/ViewProject";
import { StartAProject } from "./Pages/StartAProject";
// import { Projects } from "../Pages/Projects";
import { Login } from "./Login";
import { Page1 } from "./Pages/StartPage1";
import { Page2 } from "./Pages/StartPage2";
import { Page3 } from "./Pages/StartPage3";
import { Arts } from "../Pages/Arts/Arts";
import { Comics } from "../Pages/Comics/Comics";
import { Design } from "../Pages/Design/Design";
import { Film } from "../Pages/Film/Film";
import { Food } from "../Pages/Food/Food";
import { Games } from "../Pages/Games/Games";
import { Music } from "../Pages/Music/Music";
import { Publishing } from "../Pages/Publishing/Publishing";
// import { PrivateRoute } from "./PrivateRoute";
import { Explore } from "./Explore";
import { Transaction } from "../Pages/Transaction";
const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/home/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/start" render={() => <StartAProject />} />
        <Route
          exact
          path="/start/startAProjectPage1"
          exact
          render={() => <Page1 />}
        />
        <Route
          exact
          path="/start/startAProjectPage2"
          exact
          render={() => <Page2 />}
        />
        <Route
          exact
          path="/start/startAProjectPage3"
          exact
          render={() => <Page3 />}
        />
        <Route
          path="/explore"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />

        <Route path="/projectCreated" component={ProjectCreated} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/arts" render={(props) => <Arts {...props} />} />
        <Route
          exact
          path="/arts/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/comics" render={(props) => <Comics {...props} />} />
        <Route
          exact
          path="/comics/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/design" render={(props) => <Design {...props} />} />
        <Route
          exact
          path="/design/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/film" render={(props) => <Film {...props} />} />
        <Route
          exact
          path="/film/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/food" render={(props) => <Food {...props} />} />
        <Route
          exact
          path="/food/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/games" render={(props) => <Games {...props} />} />
        <Route
          exact
          path="/games/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route exact path="/music" render={(props) => <Music {...props} />} />
        <Route
          exact
          path="/music/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route
          exact
          path="/publishing"
          render={(props) => <Publishing {...props} />}
        />
        <Route
          exact
          path="/publishing/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route render={() => <h3>Error: 404. Page not found</h3>} />
      </Switch>
      <Navbar />
      <Footer />
    </div>
  );
};
export default Routes;
