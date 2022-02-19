import React, { useState} from 'react';
import Board from './Board';
import './Game.css'
import { calculateWinner } from '../helper';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        //определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[index]) return null
        //определить чей ход
        boardCopy[index] =xIsNext ? 'X' : '0'
        //обновить наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className="start__btn" onClick={() =>setBoard(Array(9).fill(null))}>Clear board</button>
        )
    }
    return (
        <div className="wrapper">
            <h1 className='h__text'>Let's play the game</h1>
            { startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className='p__text'>{winner ? 'Winner ' + winner : 'Now plays ' + (xIsNext ? 'X' : '0')}</p>
        </div>
    );
}

export default Game;
