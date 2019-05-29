import React, { Component } from "react";
import GuestRoutes from "../routes/GuestRoutes";
import "./UserLayout.scss";

export default class GuestLayout extends Component {
  render() {
    return (
      <div className="user-layout">
        <GuestRoutes />
      </div>
    );
  }
}
