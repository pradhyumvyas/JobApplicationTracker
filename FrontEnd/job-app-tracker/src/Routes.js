import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './core/home'
import Signin from './user/Signin'


function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/signin" exact component={Signin} ></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
