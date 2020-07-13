import React, { useState, useEffect } from 'react';
import './Tile.css';

const Tile = props => {
    const [tileClass, setTileClass] = useState("tile-on");
    const idx = props.idx;
    
    const FAR_LEFT = idx % 5 === 1;
    const FAR_RIGHT = idx % 5 === 0;
    const TOPMOST = idx < 6;
    const BOTTOMMOST = idx > 20;
    
    const LEFT_TILE = idx - 1;
    const RIGHT_TILE = idx + 1;
    const ABOVE_TILE = idx - 5;
    const BELOW_TILE = idx + 5;

    useEffect(() => {
        if (!props.gameOver) {
            console.log("Set game");
            Math.random() <= 0.5 ? setTileClass("tile-on") : setTileClass("tile-off")
        } else {
            console.log("Close game");
            setTileClass("tile-on");
        }
    }, [props.gameOver]);

    useEffect(() => {
        props.toggledTiles.forEach(tile => toggleTile(tile))
    }, [props.toggledTiles]);

    const toggleTile = tile => {
        if (tile === props.idx) {
            tileClass === "tile-on" ? setTileClass("tile-off") : setTileClass("tile-on");   
        }
    }
    const getSurroundingTiles = () => {
        let tiles = [];        
        if (!FAR_LEFT) tiles.push(LEFT_TILE);
        if (!FAR_RIGHT) tiles.push(RIGHT_TILE);
        if (!TOPMOST) tiles.push(ABOVE_TILE);
        if (!BOTTOMMOST) tiles.push(BELOW_TILE);

        return tiles;
    }

    const handleClick = () => {
        if (props.gameOver) {
            console.log("clickety-click!!");
            props.setTurnCount(props.turnCount + 1);
            let tiles = getSurroundingTiles(props.idx);
            props.activateTiles(tiles);
        } else {
            console.log("MEH");
        }
    }

    return (
        <div className={"tile " + tileClass} onClick={handleClick}>Tile {props.idx}</div>
    )
}

export default Tile;
