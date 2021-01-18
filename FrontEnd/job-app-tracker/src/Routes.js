import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './core/home'
import Dashboard from './user/Dashboard';
import Signin from './user/Signin'
import Signup from './user/Signup';


function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/signin" exact component={Signin} ></Route>
            <Route path="/signup" exact component={Signup} ></Route>
            <Route path="/dashboard" exact component={Dashboard} ></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
