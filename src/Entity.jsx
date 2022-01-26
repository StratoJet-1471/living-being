import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {setEntityInternalState} from './react-redux-store/slice.js';

function processLifeTact(...callbacks) {
    callbacks.forEach((callback) => callback());
}

function setCoordOffsetsForDirection(direction) {
    if(direction == "north") return {dX: 0, dY: -1};
    else if(direction == "northEast") return {dX: 1, dY: -1};
    else if(direction == "east") return {dX: 1, dY: 0};
    else if(direction == "southEast") return {dX: 1, dY: 1};
    else if(direction == "south") return {dX: 0, dY: 1};
    else if(direction == "southWest") return {dX: -1, dY: 1};
    else if(direction == "west") return {dX: -1, dY: 0};
    else if(direction == "northWest") return {dX: -1, dY: -1};
    else return null;
}


function createNeighborCellsInfo_Empty(directions) {
    let info = {};
    for (let direction of directions) {
        info[direction] = null;
    }
    return info;
}

export default function Entity(props) {  
/*
    Реализуем пока самый примитивный вариант: Существо не может составлять собственную карту Мира и даже запоминать пройденный путь. Всё, что оно хранит в памяти - это инфу о текущих соседних клетках. Соседние клетки отличаются друг от друга по {dX, dY}. Если значением св-ва data является null, значит, эти {dX, dY} ведут за пределы Мира. При перемещении Существа на новую клетку вся инфа о соседних клетках обновляется.
*/   

    const neighborCellsDirections = ["north", "northEast", "east", "southEast", "south", "southWest", "west", "northWest"];
    const neighborCellsScanner = props.connectorWithWorld.getNeighborCellsData;

    const [fullInternalState, setFullInternalState] = useState({
        pulseCount: 0,
        shouldScanNeighborCells: true,
        neighborCellsInfo: createNeighborCellsInfo_Empty(neighborCellsDirections)
    });


    //Существо не должно владеть инфой обо всём мире - поэтому мы не должны получать из хранилища состояний массив всех объектов-клеток. 
    //Существо также не может по своему почину перемещаться в клетку с определёнными координатами - поэтому здесь не должно быть ф-и типа setPosition(). 
    //Существо может получать инфу только о соседних клетках (в зависимости от того, как далеко оно "видит"). И оно может перемещаться на какое-то расстояние и в каком-то направлении от текущей своей позиции. Т.е., все перемещения должны иметь вид не "переместись в клетку с такими-то координатами", а "измени свои координаты на столько-то и столько-то от текущих".
    //const position = useSelector((state) => state.entityPosition); //Существо не должно иметь доступ к своей позиции в координатах Мира. У него м.б. представление о своей позиции только в рамках той части Мира, которую оно разведало.
    const dispatch = useDispatch();

    let pulseCount = fullInternalState.pulseCount;
    let shouldScanNeighborCells = fullInternalState.shouldScanNeighborCells;
    let neighborCellsInfo = fullInternalState.neighborCellsInfo;

    useEffect(() => {
        setTimeout(() => {
            let updatedNeighborCellsInfo = null;
            processLifeTact(() => {
                pulseCount++; //Это делается обязательно.
                //Здесь м.б. алгоритмы, изменяющие shouldScanNeighborCells.


                if(shouldScanNeighborCells)
                    updatedNeighborCellsInfo = neighborCellsScanner(neighborCellsDirections, setCoordOffsetsForDirection);
            });

            let newFullInternalState = {};
            newFullInternalState.pulseCount = pulseCount;
            newFullInternalState.shouldScanNeighborCells = shouldScanNeighborCells;
            if(updatedNeighborCellsInfo) newFullInternalState.neighborCellsInfo = updatedNeighborCellsInfo;
            else newFullInternalState.neighborCellsInfo = fullInternalState.neighborCellsInfo;

            setFullInternalState(newFullInternalState);

            dispatch(setEntityInternalState({
                pulseCount,
                //neighborCellsInfo: updatedNeighborCellsInfo,
            }));
        }, 1000);
    });

    return null;
}