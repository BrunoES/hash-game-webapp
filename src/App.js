import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="Hash Game">
      <header className="App-header">
        <p>
          <Game />
        </p>
      </header>
    </div>
  );
}

export default App;
