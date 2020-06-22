import React from 'react';
import './App.css';
import Projects from "./Components/Projects";
import {Route, Router, Switch} from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import ProjectOverview from "./Components/ProjectOverview";
import Hero from "./Components/Hero";
import NavBar from "./Components/navBar";
import Methodology from "./Components/Methodology";

function App() {
  return (
      <React.Fragment>
          <div className="App">
              <NavBar />
              <Hero />
              <div className="hero_below">
                  <Switch>
                      <Route exact path="/" component={Projects}/>
                      <Route exact path="/:id" component={ProjectOverview}/>
                  </Switch>
                  <Methodology />
              </div>

          </div>
      </React.Fragment>
  );
}

export default App;
