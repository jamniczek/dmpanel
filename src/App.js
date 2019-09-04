import React from "react";
import "./App.css";
import SidePanel from "./components/sidePanel/SidePanelComponent";
import Modal from "./components/common/components/genericModal/genericModal";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-sm-4 offset-sm-8">
          <SidePanel />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
