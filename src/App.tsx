import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [board, setBoard] = useState(Array(9).fill(" "));
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState<string|null>(null);
  const [gameSteps, setGameSteps] = useState<Array<number>>([]);
  const [boardIsFree, setBoardIsFree] = useState<boolean>(true);

  const checkWinner = (board: Array<Number>) => {
    const winningLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const line = winningLines[i];
      const a = Number(line[0]);
      const b = Number(line[1]);
      const c = Number(line[2]);
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const handleMakeSelection = (index: number) => {
    if (board[index] === " " && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "x" ? "o" : "x");
      setGameSteps([...gameSteps, index]);
      setBoardIsFree(false);
      const calculatedWinner = checkWinner(board);
      if (calculatedWinner) {
        setWinner(calculatedWinner);
      }
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(" "));
    setPlayer("x");
    setWinner(null);
    setGameSteps([]);
    setBoardIsFree(true);
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

  const handleUndo = () => {
    if (gameSteps.length > 0) {
      const lastStep = gameSteps.pop();
      const newBoard = [...board];
      if (lastStep){
        newBoard[lastStep] = " ";
      }
      setBoard(newBoard);
      setPlayer(player === "x" ? "o" : "x");
      const calculatedWinner = checkWinner(board);
      setWinner(calculatedWinner);
    }
    if (gameSteps.length === 0) {
      setBoardIsFree(true);
    }
  }

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
      <div className="buttons">
        <button className={boardIsFree ? "button-inactive" : "reset-button"} onClick={handleReset}>Reset</button>
        <button className={gameSteps.length === 0 ? "button-inactive" : "undo-button"} onClick={handleUndo}>Undo</button>
      </div>
    </div>
  );
}

export default App;
