import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Layout/Header";
const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
