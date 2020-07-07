import React, { useState } from 'react';
import './App.css';
import Title from './components/main/Title'
import Board from './components/game/Board';
import Counter from './components/game/Counter';

const App = () => {
  const [playMode, setPlayMode] = useState(false);
  const [turnCount, setTurnCount] = useState(0);

  const handlePlayButtonClick = () => {
    console.log("Let's Play!!!");
    setTurnCount(0);
    setPlayMode(true);

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
        <Counter turnCount={turnCount} />
        <Board playMode={playMode}/>
      </header>
    </div>
  );
}

export default App;