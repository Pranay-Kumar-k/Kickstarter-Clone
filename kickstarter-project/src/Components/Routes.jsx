import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Home } from "./../Pages/Home";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ViewProject } from "../Pages/ViewProject";
import { StartAProject } from "./Pages/StartAProject";
// import { Projects } from "../Pages/Projects";
import { Login } from "./Login";
import { Page1 } from "./Pages/StartPage1";
import { Page2 } from "./Pages/StartPage2"
import { Page3 } from "./Pages/StartPage3"
import { Arts } from "../Pages/Arts/Arts";
import { Comics } from "../Pages/Comics/Comics";
import { Design } from "../Pages/Design/Design";
import { Film } from "../Pages/Film/Film";
import { Food } from "../Pages/Food/Food";
import { Games } from "../Pages/Games/Games";
import { Music } from "../Pages/Music/Music";
import { Publishing } from "../Pages/Publishing/Publishing";
<<<<<<< HEAD
import { LandingPage } from "../Pages/LandingPage";
=======

>>>>>>> 13df179fefd21e876a21e68ac3727ced123efe01
// import { PrivateRoute } from "./PrivateRoute";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact render={(props) => <LandingPage {...props} />} /> */}
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/home/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
<<<<<<< HEAD
        <Route
          exact
          path="/:project_id"
          render={(props) => <ViewProject {...props} />}
        />
=======
        <Route path="/start" render={()=> <StartAProject/>}/>
        <Route path="/1" exact render={()=> <Page1 />} />
        <Route path="/2" exact render={()=> <Page2 />} />
        <Route path="/3" exact render={()=> <Page3 />} />

>>>>>>> 13df179fefd21e876a21e68ac3727ced123efe01
        <Route path="/start" render={() => <StartAProject />} />

        {/* <Route path="/projects" component={Projects} /> */}
        <Route exact path="/arts" render={() => <Arts />} />
        <Route exact path="/comics" render={() => <Comics />} />
        <Route exact path="/design" render={() => <Design />} />
        <Route exact path="/film" render={() => <Film />} />
        <Route exact path="/food" render={() => <Food />} />
        <Route exact path="/games" render={() => <Games />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/publishing" render={() => <Publishing />} /> */}
       
        <Route path="/login" render={(props) => <Login {...props} />} /> 
        <Route exact path="/publishing" render={() => <Publishing />} />

<<<<<<< HEAD
        <Route exact path="/login" render={(props) => <Login {...props} />} />
=======
>>>>>>> 13df179fefd21e876a21e68ac3727ced123efe01
        <Route render={() => <h3>Error: 404. Page not found</h3>} />
      </Switch>
      <Navbar />
      <Footer />
    </div>
  );
};
export default Routes;
