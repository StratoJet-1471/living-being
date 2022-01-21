import React from 'react';
import { useSelector } from 'react-redux';

import AreaCell from './AreaCell.jsx';
import "./css/style.css";

export default function Area(props) {
    const cellInfoObjects = useSelector((state) => state.cells);
    //const cells = cellInfoObjects.map((item, index) => <AreaCell key={index} cellData={item} />); //item={index: value, difficulty: value}

    let cellsCount = 0;
    const cells = cellInfoObjects.map((rowArray) => {
        return rowArray.map((item) => { 
            cellsCount++;
            return <AreaCell key={cellsCount} cellData={item} />; //item={x:value, y:value, difficulty: value}
        });
    });

    return (
        <div className="area">{cells}</div>
    );
}