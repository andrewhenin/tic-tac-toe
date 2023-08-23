import React, { useState } from 'react';
import './App.css';


function App() {

  const [board, setBoard] = useState(Array(9).fill(" "));
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(null);

  const checkWinner = (board: any) => {
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
      const [a, b, c] = winningLines[i];
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

  // React.useEffect(() => {
  //   const calculatedWinner = checkWinner(board);
  //   setWinner(calculatedWinner);
  // }, [board]);

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
      <div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
