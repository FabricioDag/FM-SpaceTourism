import { useState } from 'react';

import './App.css';

import { Header } from './components';
import { Home, Destination, Crew } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Crew />
    </div>
  );
}

export default App;
