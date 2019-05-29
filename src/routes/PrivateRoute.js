import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }, props) => {
  const loggedIn = props.token ? props.token : Cookie.get("token");
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
};

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

export default connect(mapStateToProps)(PrivateRoute);
