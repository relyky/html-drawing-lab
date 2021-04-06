import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HelloPixi from './apps/HelloPixi/appCtx'
import MeteorStage from './apps/Meteor/appCtx'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/helloPixi">Hello Pixi</Link>
            </li>
            <li>
              <Link to="/meteor">流星</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/helloPixi">
            <HelloPixi />
          </Route>
          <Route path="/meteor">
            <MeteorStage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
