import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Home from "../Routes/Home.js"
import Search from "../Routes/Search.js"
import TV from "../Routes/TV.js"
import Header from "./Header.js";

export default () => (
    <Router>
        <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/tv" exact component={TV}/>
                <Redirect from="*" to="/" />
            </Switch>
    </Router>
)