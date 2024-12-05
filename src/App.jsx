import Player from "./components/player"

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player playerName="Khonza" playerSymbol="X" />
            <Player playerName="Nosiphiwo" playerSymbol="O" />
        </ol>
        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
