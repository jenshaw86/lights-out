import React, { useState } from 'react';
import './App.css';
import Title from './components/main/Title'
import Board from './components/game/Board';
import Counter from './components/game/Counter';

const App = () => {
  // state
  const [gameOver, setGameOver] = useState(true);
  const [turnCount, setTurnCount] = useState(0);

  // handlers
  const handlePlayButtonClick = () => {
    setGameOver(true);
    setTurnCount(0);
    setGameOver(false);
    displayCounter();
  }

  // display handlers
  const displayCounter = () => gameOver ? null : <Counter turnCount={turnCount} />;

  // methods
  const buttonText = gameOver ? `Let's Play` : `Restart`;

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <button onClick={handlePlayButtonClick}>{buttonText}</button>
        { displayCounter() }
        <Board 
          gameOver={gameOver} 
          turnCount={turnCount} 
          setTurnCount={setTurnCount} />
      </header>
    </div>
  );
}

export default App;