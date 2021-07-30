import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import "./css/lifecycle.css";
import "./css/mixin.css";
import "./css/task.css";
import "./css/reactHooks.css";
import routes from './Router';
function App(props) {

  const showContentMenus = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <Router>
      <div className="app">
        {showContentMenus(routes)}
      </div>
    </Router>
  )
}

export default App;