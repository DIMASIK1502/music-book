import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


export default class GuestRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
