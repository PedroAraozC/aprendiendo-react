import { Children } from 'react'
import './App.css'
import { useState } from "react";
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx';
import { TURNS } from './constants.js';
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {

  const [board, setBoard] = useState
    (
      Array(9).fill(null)
    )

  const [turn, setTurn] = useState(TURNS.X)
  //null no hay ganador, false hay empate
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

 

  const updateBoard = (index) => {
    //no actualiza el estado si ya hay un valor
    if (board[index] || winner) return
    //actualiza el tablero
    const newBoard = [...board] // Crea una copia del array para no modificar el original
    newBoard[index] = turn
    setBoard(newBoard)
    //cambia el turnos
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }

  }

  return (
    <main className='board'>
      <h1>Tateti</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (

              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>

        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App