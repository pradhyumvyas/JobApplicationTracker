import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoutes from './auth/helper/PrivateRoutes';

import Home from './core/home'
import Dashboard from './mainData/Dashboard';
import Signin from './user/Signin'
import Signup from './user/Signup';
import AddData from './mainData/helper/AddData'
import Profile from './user/Profile';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/signin" exact component={Signin} ></Route>
            <Route path="/signup" exact component={Signup} ></Route>
            <Route path="/addData" exact component={AddData} ></Route>
            <Route path="/profile" exact component={Profile} ></Route>
            <PrivateRoutes path="/dashboard" exact component={Dashboard} ></PrivateRoutes>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
