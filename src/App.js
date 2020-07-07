import React from 'react';
import './App.css';
import Title from './components/main/Title'
import Board from './components/game/Board';

function App() {
  const handlePlayButtonClick = () => {
    console.log("Let's Play!!!");
    // When this button is clicked, it should trigger the following
    // A fresh count starting from 0
    // random lighting for tiles
    // clickability of tiles
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <button onClick={handlePlayButtonClick}>Let's Play</button>
        <Board />
      </header>
    </div>
  );
}

export default App;