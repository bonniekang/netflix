import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Routes/Home'
import Tv from './Routes/Tv'
import Search from './Routes/Search'
import NavBar from './Components/NavBar'

function App () {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/tv'>
          <Tv />
        </Route>
        <Route path='/search'>
          <Search/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
