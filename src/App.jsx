import { useState } from "react";

import GameBoard from "./components/gameboard";
import Player from "./components/player";
import Log from "./components/log";
import GameOver from "./components/gameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  
  if(gameTurns.length > 0 && gameTurns[0].player ==='X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  
  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = firstSquareSymbol;
    }
  }

  const hasDrawn = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {square:{row: rowIndex, col: colIndex}, player: currentPlayer },
         ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player initialPlayerName="Khonza" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialPlayerName="Nosiphiwo" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDrawn) && <GameOver winnerSymbol={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
