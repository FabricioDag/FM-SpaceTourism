import { useState } from 'react';

import './App.css';

import { Header } from './components';
import { Home, Destination } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
