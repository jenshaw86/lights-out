import React, { useState, useEffect } from 'react';
import './Tile.css';

const Tile = props => {
    const [tileClass, setTileClass] = useState("tile-on");
    
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
    const getSurroundingTiles = idx => {
        let tiles = [];        
        // if not leftmost (idx % 5 === 1) then add left tile (idx - 1)
        if (!(idx % 5 === 1)) tiles.push(idx - 1);
        // if not rightmost (idx % 5 === 0) then add right tile (idx + 1)
        if (!(idx % 5 === 0)) tiles.push(idx + 1);
        // if not top tile (idx < 6) then add top tile (idx - 5)
        if (!(idx < 6)) tiles.push(idx - 5);
        // if not bottom tile (idx > 20) then add bottom tile (idx + 5)
        if (!(idx > 20)) tiles.push(idx + 5);

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
