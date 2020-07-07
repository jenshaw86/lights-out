import React, { useState, useEffect }from 'react';
import './Tile.css';

const Tile = props => {
    const [tileClass, setTileClass] = useState("tile-on");

    useEffect(() => {
        if (!props.gameOver) {
            Math.random() <= 0.5 ? setTileClass("tile-on") : setTileClass("tile-off")
        } else {
            setTileClass("tile-on");
        }
    }, [props.gameOver]);

    const handleClick = () => {
        if (props.playMode) {
            console.log("clickety-click!!");
            props.setTurnCount(props.turnCount + 1);
        } else {
            console.log("MEH");
        }
    }

    return (
        <div className={"tile " + tileClass} onClick={handleClick}>Tile {props.idx}</div>
    )
}

export default Tile;

// TODO Add logic for random lights