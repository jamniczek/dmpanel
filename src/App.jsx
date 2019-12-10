import React from 'react';
import './App.css';
import { ConnectedMap } from './components/Map';
import SidePanel from './components/sidePanel/SidePanelComponent';
import Modal from './components/common/components/genericModal/genericModal';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-sm-8">
          <ConnectedMap />
        </div>
        <div className="col-sm-4">
          <SidePanel />
        </div>
        <div className="col-12" />
      </div>
      <Modal />
    </div>
  );
}

export default App;
