import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Home from "../Routes/Home/index.js"
import Search from "../Routes/Search/index.js"
import TV from "../Routes/TV/index.js"
import Detail from "../Routes/Detail/index.js"
import Header from "./Header.js";

export default () => (
    <Router>
        <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/tv" exact component={TV}/>
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/show/:id" component={Detail}/>
                <Redirect from="*" to="/" />
            </Switch>
    </Router>
)