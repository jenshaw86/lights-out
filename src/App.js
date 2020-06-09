import React from 'react';
import './App.css';
import Title from './components/main/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <button>Let's Play</button>
        <button>Sign In</button>
        <button>Score Board</button>
      </header>
    </div>
  );
}

export default App;