import Player from "./components/player"

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player initialPlayerName="Khonza" symbol="X" />
            <Player initialPlayerName="Nosiphiwo" symbol="O" />
        </ol>
        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
