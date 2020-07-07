import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = () => {
    const size = 5;
    const tileCount = Math.pow(size, 2);

    const populateTiles = () => {
        let tileArray = [];
        
        for(let i = 1; i <= tileCount; i++) {
            tileArray.push(<Tile key={i} idx={i}/>)
        }
        return tileArray;
    }

    return (
        <div className="grid">
            {populateTiles()}
        </div>
    )
}

export default Board;