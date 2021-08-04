import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/main.css";
import routes from "./Router";
import ThemeContextProvider from "./contexts/ThemeContext";
function App(props) {
  const showContentMenus = (routes) => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <Router>
      <div className="app">
        <ThemeContextProvider>{showContentMenus(routes)}</ThemeContextProvider>
      </div>
    </Router>
  );
}

export default App;
