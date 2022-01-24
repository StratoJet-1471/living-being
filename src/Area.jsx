import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AreaCell from './AreaCell.jsx';
import "./css/style.css";

import {DEFAULTS} from "./defaults.js";
import {forceSetEntityPosition} from './react-redux-store/slice.js';

function checkDerivedStartPosition(derivedStartPos) {
    if(derivedStartPos && 
        derivedStartPos.x && 
        derivedStartPos.y && 
        (derivedStartPos.x >= 1 && derivedStartPos.x <= DEFAULTS.areaDimensionsObj.x) &&
        (derivedStartPos.y >= 1 && derivedStartPos.y <= DEFAULTS.areaDimensionsObj.y))
        return derivedStartPos;
    return false;
}

export default function Area(props) {
    const entityStartPos = checkDerivedStartPosition(props.entityStartPos) || DEFAULTS.entityStartPosition;
    const cellInfoObjects = useSelector((state) => state.cells);
    const dispatch = useDispatch();

    let cellsCount = 0;
    const cells = cellInfoObjects.map((rowArray) => {
        return rowArray.map((item) => { 
            cellsCount++;
            return <AreaCell key={cellsCount} cellData={item} />; //item={x:value, y:value, difficulty: value}
        });
    });

    dispatch(forceSetEntityPosition(entityStartPos));

    return (
        <div className="area">{cells}</div>
    );
}