import React from 'react';
import { ConnectedExample } from './components/Example';
import './App.css';
import React from 'react';
import SidePanel from './components/sidePanel/SidePanelComponent';

function App() {
  return (
    <div className="App">
      <ConnectedExample />
      <header className="App-header">
        <SidePanel></SidePanel>
      </header>
    </div>
  );
}

export default App;
