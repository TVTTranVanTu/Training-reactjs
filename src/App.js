import "./App.css"
import React from 'react';
import Lifecycle from "./components/Lifecycle";
import HandleEvent from "./components/HandleEvent";

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Lifecycle /> */}
        <HandleEvent />
      </div>
    )
  }

}

export default App;
