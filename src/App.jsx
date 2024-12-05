import { useState } from "react";

import GameBoard from "./components/gameboard";
import Player from "./components/player";
import Log from "./components/log";

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player initialPlayerName="Khonza" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialPlayerName="Nosiphiwo" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
