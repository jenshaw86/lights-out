import React, { useState } from 'react';
import Tile from './Tile';
import './Board.css';

const Board = props => {    
    const [toggledTiles, setToggledTiles] = useState([]);

    const size = 5;
    const tileCount = Math.pow(size, 2);

    const activateTiles = tileArray => {
        setToggledTiles(tileArray);
    }

    const populateTiles = () => {
        let tileArray = [];
        
        for(let i = 1; i <= tileCount; i++) {
            tileArray.push(<Tile key={i} idx={i} gameOver={props.gameOver} turnCount={props.turnCount} setTurnCount={props.setTurnCount} activateTiles={activateTiles} toggledTiles={toggledTiles}/>)
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