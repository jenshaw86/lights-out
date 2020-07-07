import React from 'react';
import './Tile.css';

const Tile = props => {
    return (
        <div className="tile">Tile {props.idx}</div>
    )
}

export default Tile;

// TODO Add logic for random lights