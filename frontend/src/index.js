import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';

import Index from "./views/Index";
import About from "./views/About";
import Projects from "./views/About";
import Resume from "./views/Resume";
import Stats from "./views/stats";
import Contact from "./views/Contact";

// Hidden
import Music from './views/Music';

import Login from './views/Login';
import Admin from './views/Admin';

import NotFound from "./views/NotFound";

import "./static/css/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/music" component={Music} />
      <Route path='/login' component={Login} />

      <PrivateRoute path="/resume" component={Resume} />
      <AdminRoute path="/admin" component={Admin} />
      
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
