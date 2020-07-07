import React from 'react';
import './Tile.css';

const Tile = props => {
    
    const handleClick = () => {
        if (props.playMode) {
            console.log("clickety-click!!");
            props.setTurnCount(props.turnCount + 1);
        } else {
            console.log("MEH");
        }
    }

    return (
        <div className="tile" onClick={handleClick}>Tile {props.idx}</div>
    )
}

export default Tile;

// TODO Add logic for random lights