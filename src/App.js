import React from 'react'
import './App.css';
import Album from "./Album";
import Gfg from '../src/gfgModule/Gfg'
import Codeforces from '../src/CodeforcesMod/Codeforces'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hackerrank from '../src/HackerrankMod/Hackerrank';
import Admin from './AdminModule/Admin';
import AdminPg from './AdminPg';



function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Album} />
          <Route path="/gfg"  component={Gfg} />
          <Route path="/codeforces"  component={Codeforces} />
          <Route path="/hackerrank"  component={Hackerrank} />
          <Route path="/admin"  component={Admin} />
          <Route path="/adminPg"  component={AdminPg} />
        </Switch>
    </Router>
  );
}

export default App;
