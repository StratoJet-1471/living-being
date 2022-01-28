import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Entity from "./Entity.jsx";
import AreaCell from './AreaCell.jsx';
import "./css/style.css";

import {DEFAULTS} from "./defaults.js";
import {forceSetEntityPosition} from './react-redux-store/slice.js';

function isValueBetween(value, minimum, maximum) {
    if(value >= minimum && value <= maximum) return true;
    return false;
}

function checkDerivedEntityStartPosition(derivedStartPos) {
        if(derivedStartPos && 
            Number.isInteger(derivedStartPos.x) && 
            Number.isInteger(derivedStartPos.y) && 
            isValueBetween(derivedStartPos.x, 1, DEFAULTS.areaDimensionsObj.x) &&
            isValueBetween(derivedStartPos.y, 1, DEFAULTS.areaDimensionsObj.y))
            return derivedStartPos;
    return false;
}

export default function Area(props) {
    const entityStartPos = checkDerivedEntityStartPosition(props.entityStartPos) || DEFAULTS.entityStartPosition;
    const cellInfoObjects = useSelector((state) => state.cells);
    const entityPosition = useSelector((state) => state.entityPosition);
    const dispatch = useDispatch();
    
    const getEntityNeighborCellsData = (scanDirections, coordOffsetsForDirectionCreator) => {
        let data = {};
        for(const direction of scanDirections) {
            const {dX, dY} = coordOffsetsForDirectionCreator(direction);
            if(Number.isInteger(dX) && Number.isInteger(dY) && isValueBetween((entityPosition.x + dX), 1, DEFAULTS.areaDimensionsObj.x) && 
                isValueBetween((entityPosition.y + dY), 1, DEFAULTS.areaDimensionsObj.y)) 
                data[direction] = { difficulty: ((cellInfoObjects[entityPosition.y + dY - 1])[entityPosition.x + dX - 1]).difficulty};
            else data[direction] = null;
        }

        return data;
    };

    const getCurrentEntityCellData = () => {
        return { difficulty: ((cellInfoObjects[entityPosition.y-1])[entityPosition.x-1]).difficulty};
    };

    const moveEntity = (direction, coordOffsetsForDirectionCreator) => {
        let newEntityPosition = {};
        const {dX, dY} = coordOffsetsForDirectionCreator(direction);
        if(Number.isInteger(dX) && Number.isInteger(dY) && isValueBetween((entityPosition.x + dX), 1, DEFAULTS.areaDimensionsObj.x) && 
        isValueBetween((entityPosition.y + dY), 1, DEFAULTS.areaDimensionsObj.y)) {
            newEntityPosition.x = entityPosition.x + dX;
            newEntityPosition.y = entityPosition.y + dY;
            dispatch(forceSetEntityPosition(newEntityPosition));
        }
    };


    const entityConnectorWithWorld = {
        getNeighborCellsData: getEntityNeighborCellsData,
        move: moveEntity,
        getCurrentCellData: getCurrentEntityCellData,
    };

    let cellsCount = 0;
    const cells = cellInfoObjects.map((rowArray) => {
        return rowArray.map((item) => { 
            cellsCount++;
            return <AreaCell key={cellsCount} cellData={item} />; //item={x:value, y:value, difficulty: value}
        });
    });

    //Думаю, от этого нужно избавиться - без особой нужды всё усложняет.
    if(entityPosition===null) dispatch(forceSetEntityPosition(entityStartPos));

    //Логично, чтобы Существо находилось внутри Мира. Поэтому размещаем его компонент <Entity/> здесь, внутри <Area>. 
    return (
        <>
            <Entity connectorWithWorld={entityConnectorWithWorld}/>
            <div className="area">{cells}</div>
        </>
    );
}