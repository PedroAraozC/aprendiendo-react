import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {

        const [a, b, c] = combo

        if (
            boardToCheck[a] && // verifica si en el 0 hay un valor
            boardToCheck[a] === boardToCheck[b] && // comprueba la igualdad de valores
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a] // devuelve el valor de la primera casilla
        }
    }
    return null // no hay ganador
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
}