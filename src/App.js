import React, { useState } from 'react';
import './App.css';
import Title from './components/main/Title'
import Board from './components/game/Board';
import Counter from './components/game/Counter';

const App = () => {
  const [gameOver, setGameOver] = useState(true);
  const [turnCount, setTurnCount] = useState(0);

  const handlePlayButtonClick = () => {
    console.log("Let's Play!!!");
    setGameOver(true);

    setTurnCount(0);
    setGameOver(false);
  }

  const buttonText = gameOver ? `Let's Play` : `Restart`;

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <button onClick={handlePlayButtonClick}>{buttonText}</button>
        <Counter turnCount={turnCount} />
        <Board gameOver={gameOver} turnCount={turnCount} setTurnCount={setTurnCount} />
      </header>
    </div>
  );
}

export default App;