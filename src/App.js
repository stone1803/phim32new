import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./Templates/Home"
import { routesHome } from "./router";
const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};
function App() {
  return (
     <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
