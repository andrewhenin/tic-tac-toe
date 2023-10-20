import { useState } from 'react';
import './App.css';


function App() {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState<Number|null>(null);
  const [gameSteps, setGameSteps] = useState<Array<number>>([]);
  const [boardIsFree, setBoardIsFree] = useState<boolean>(true);

  const checkWinner = (board: Array<Number>) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      let line = winningLines[i];
      let a = line[0];
      let b = line[1];
      let c = line[2];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        console.log("here");
      }
    }
  }

  const handleMakeSelection = (index: number) => {
    if (gameSteps.length === 0) {
      setBoardIsFree(false);
    }
    if (board[index] === "" && winner === null) {
      console.log(player);
      board.splice(index, 1, player);
      console.log(board);
      setPlayer(player === "x" ? "o" : "x");
      setGameSteps([...gameSteps, index]);
      checkWinner(board);
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setPlayer("x");
    setWinner(null);
    setGameSteps([]);
    setBoardIsFree(true);
  }

  const titleMessage = () => {
    if (winner) {
      return `Winner is ${winner}!`;
    } else if (gameSteps.length === 9) {
      return "Draw";
    } else {
      return `Next player is ${player}`;
    }
  }

  const boardGrid = () => {
    return (
      <div className="game-board">
        {board.map((value, index) => {
          return (
            <div className="box" key={index} onClick={() => handleMakeSelection(index)}>
              {value ? value : ""}
            </div>
          )})}
      </div>
    );
  };

  const handleUndo = () => {
    if (gameSteps.length > 0) {
      const lastStep = gameSteps.pop();
      if (lastStep !== undefined){
        board.splice(lastStep, 1, "");
      }
      console.log(board);
      setPlayer(player === "x" ? "o" : "x");
    }
    if (gameSteps.length === 0) {
      setBoardIsFree(true);
      setGameSteps([]);
    }
    setWinner(null);
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
      <div className="game-status">
        {titleMessage()}
      </div>
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
