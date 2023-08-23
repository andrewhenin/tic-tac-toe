import React, { useState } from 'react';
import './App.css';


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(null);

  const checkWinner = (board: any) => {}

  const handleMakeSelection = (index: number) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "x" ? "o" : "x");
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(" "));
    setPlayer("x");
    setWinner(null);
  }

  const boardGrid = () => {
    return (
      <div className="game-board">
        {board.map((value, index) => {
          return (
            <div className="box" key={index} onClick={() => handleMakeSelection(index)}>
              {value ? value : " "}
            </div>
          )})}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="project-metadata">
          <span className="hackathon-title">
            7-Day Hackathon
          </span>
          <span className="project-number">
            Project 2
          </span>
        </div>
        <div className="project-title">
          Tic Tac Toe
        </div>
      </header>
      <div className="game-frame">
        {boardGrid()}
      </div>
    </div>
  );
}

export default App;
