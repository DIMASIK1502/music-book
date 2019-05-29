import React, { Component } from "react";
import Header from "../components/Header/Header";
import UserRoutes from "../routes/UserRoutes";
import Sidebar from "../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import axios from "axios";
import Cookie from "js-cookie";
import "./UserLayout.scss";

const requestInterceptor = request => {
  const storeToken = Cookie.get("token");
  console.log(storeToken);
  request.headers["Access-Control-Allow-Origin"] = "*";
  request.headers["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";
  if (storeToken !== "" && storeToken) {
    request.headers["Authorization"] = `Bearer ${storeToken}`;
  }

  request.headers["Cache-Control"] = "no-cache";

  return request;
};

axios.interceptors.request.use(requestInterceptor);

class UserLayout extends Component {
  render() {
    return (
      <div className="user-layout">
        <Header user={this.props.user} />
        <Sidebar />
        <div className="layout-container">
          <UserRoutes />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    token: state.auth.token
  };
}

export default connect(
  mapStateToProps,
  {}
)(UserLayout);
