import React from "react";
import { ConnectedExample } from "./components/Example";
import "./App.css";
import SidePanel from "./components/sidePanel/SidePanelComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <ConnectedExample /> */}
        <div className="col-sm-4 offset-sm-8">
          <SidePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
