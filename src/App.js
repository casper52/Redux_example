import React, { Component } from 'react';
import ControlPanel from "./components/ControlPanel";
import BillBoard from "./components/BillBoard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPanel/>
        <BillBoard area='서울'/>
        <BillBoard area='부산'/>
        <BillBoard area='대구'/>
        <BillBoard area='광주'/>
      </div>
    );
  }
}

export default App;
