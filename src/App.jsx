import { useState } from "react"
import GameBoard from "./components/gameboard"
import Player from "./components/player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player initialPlayerName="Khonza" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialPlayerName="Nosiphiwo" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
      </div>

      LOG
    </main>
  )
}

export default App
