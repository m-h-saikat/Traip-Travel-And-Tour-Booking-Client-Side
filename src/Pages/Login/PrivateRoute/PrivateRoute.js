import React from "react";
import spinner from '../../../images/spinner.gif'
import { Redirect, Route } from "react-router";
import useAuth from "./../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return  <div className=" justify-content-center w-100 d-flex">
    <img src={spinner} alt="" width="300" height="300"/>
</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
