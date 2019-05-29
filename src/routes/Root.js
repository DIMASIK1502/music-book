import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "../layouts/UserLayout";
import GuestLayout from "../layouts/GuestLayout";

export default class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={GuestLayout} />
        <PrivateRoute path="/" component={UserLayout} />
      </Switch>
    );
  }
}
