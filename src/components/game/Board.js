import React, { useState } from 'react';
import Tile from './Tile';
import './Board.css';

const Board = props => {    
    // state
    const [surroundingTiles, setSurroundingTiles] = useState([]);

    // constants
    const SIZE = 5;
    const TILE_COUNT = Math.pow(SIZE, 2);

    // methods
    const activateTiles = list => {
        setSurroundingTiles(list);
    }

    // display handlers
    const populateTiles = () => {
        let tileArray = [];
        
        for(let i = 1; i <= TILE_COUNT; i++) {
            tileArray.push(
                <Tile 
                    key={i} 
                    idx={i} 
                    gameOver={props.gameOver} 
                    turnCount={props.turnCount} 
                    setTurnCount={props.setTurnCount} 
                    activateTiles={activateTiles} 
                    surroundingTiles={surroundingTiles} />
            )
        }
        return tileArray;
    }

    // html
    return (
        <div className="grid">
            { populateTiles() }
        </div>
    )
}

export default Board;