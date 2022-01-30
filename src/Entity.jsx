import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {setEntityInternalState} from './react-redux-store/slice.js';

import {DEFAULTS} from "./defaults.js";

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


function checkCellForComfort(cellData, comfortConditions) {//Выделяем это в отдельную ф-ю, т.к. в перскпективе будут сравниватьс более одного параметра.
    if(cellData.difficulty <= comfortConditions.maxDifficulty) return true;
    return false;
}

function chooseRandomMovingDirection(neighborCellsInfo, directions) {
    let chosenDirection = null;
    while(chosenDirection===null) {
        let index = Math.floor(directions.length*Math.random());
        let direction = directions[index];
        if(neighborCellsInfo[direction]) chosenDirection = direction;
    }
    return chosenDirection;
}

function chooseMovingDirection({currentCellData, comfortConditions, neighborCellsInfo, directions}) {
    if(checkCellForComfort(currentCellData, comfortConditions)) return null;
    else {//neighborCellsInfo имеет вид типа { "north": { difficulty: 1}, "east": null, ...}
        let minDiff; 
        let directionOfMinDiff = null;
        for(let direction in neighborCellsInfo) {
            if(neighborCellsInfo[direction]!==null) {
                if(minDiff===undefined) {
                    minDiff = neighborCellsInfo[direction].difficulty;
                    directionOfMinDiff = direction;
                }
                else {
                    //В ПЕРСПЕКТИВЕ это тоже придётся вынести в отдельную ф-ю, наверное, т.к. будут сравниваться на только difficulty.
                    if(neighborCellsInfo[direction].difficulty <= minDiff) { //"<=", а не "<" - потому что для живого существа будет естественнее двигаться в том подходящем направлении, которое оно обнаружило позже.
                        minDiff = neighborCellsInfo[direction].difficulty;
                        directionOfMinDiff = direction;                        
                    }
                }
            }
        }

        //return directionOfMinDiff; //Существо в любом случае двинется туда, где условия ближе к подходящим - даже если они превышают лимиты.
        //МИНУС этого подхода - Существо постоянно находит какую-то пару более-менее нормальных соседствующих клеток и начинает бесконечно метаться между ними. Тут уже надо совершенствовать его интеллект, чтоб оно выходило из этой ловушки.
        //ВООБЩЕ, если условия неподходящие, нужно вносить какой-то элемент случайности.


        if(minDiff <= comfortConditions.maxDifficulty) return directionOfMinDiff;
        else return chooseRandomMovingDirection(neighborCellsInfo, directions);
    }
}

export default function Entity(props) {  
/*
    Реализуем пока самый примитивный вариант: Существо не может составлять собственную карту Мира и даже запоминать пройденный путь. Всё, что оно хранит в памяти - это инфу о текущих соседних клетках. Соседние клетки отличаются друг от друга по {dX, dY}. Если значением св-ва data является null, значит, эти {dX, dY} ведут за пределы Мира. При перемещении Существа на новую клетку вся инфа о соседних клетках обновляется.
*/   

    const neighborCellsDirections = ["north", "northEast", "east", "southEast", "south", "southWest", "west", "northWest"];
    const neighborCellsScanner = props.connectorWithWorld.getNeighborCellsData;
    const currentCellScanner = props.connectorWithWorld.getCurrentCellData;
    const move = props.connectorWithWorld.move;
    const comfortConditions = {maxDifficulty: DEFAULTS.initialEntityMaxComfortDifficulty};
    const pulsePeriod = 1000;

    const [fullInternalState, setFullInternalState] = useState({
        pulseCount: 0,
        shouldScanNeighborCells: true,
        movingDirection: null, //null - значит, Существо в данной итерации не хочет никуда двигаться.
        neighborCellsInfo: createNeighborCellsInfo_Empty(neighborCellsDirections)
    });


    //Существо не должно владеть инфой обо всём мире - поэтому мы не должны получать из хранилища состояний массив всех объектов-клеток. 
    //Существо также не может по своему почину перемещаться в клетку с определёнными координатами - поэтому здесь не должно быть ф-и типа setPosition(). 
    //Существо может получать инфу только о соседних клетках (в зависимости от того, как далеко оно "видит"). И оно может перемещаться на какое-то расстояние и в каком-то направлении от текущей своей позиции. Т.е., все перемещения должны иметь вид не "переместись в клетку с такими-то координатами", а "измени свои координаты на столько-то и столько-то от текущих".
    //const position = useSelector((state) => state.entityPosition); //Существо не должно иметь доступ к своей позиции в координатах Мира. У него м.б. представление о своей позиции только в рамках той части Мира, которую оно разведало.
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            let newFullInternalState = {};
            let pulseCount = fullInternalState.pulseCount;
            let shouldScanNeighborCells = fullInternalState.shouldScanNeighborCells;
            //let neighborCellsInfo = fullInternalState.neighborCellsInfo;

            //================
            //Итерация жизни Существа, результатом которой является его новое состояние. 
            pulseCount++; //Это делается обязательно.

            //Здесь м.б. алгоритмы, изменяющие shouldScanNeighborCells.

            newFullInternalState.pulseCount = pulseCount;
            newFullInternalState.shouldScanNeighborCells = shouldScanNeighborCells;

            if(shouldScanNeighborCells) 
                newFullInternalState.neighborCellsInfo = neighborCellsScanner(neighborCellsDirections, setCoordOffsetsForDirection);
            else newFullInternalState.neighborCellsInfo = fullInternalState.neighborCellsInfo;

            const currentCellData = currentCellScanner();
            //console.log(currentCellData);
 
            newFullInternalState.movingDirection = chooseMovingDirection({
                currentCellData, 
                comfortConditions, 
                neighborCellsInfo: newFullInternalState.neighborCellsInfo, 
                directions: neighborCellsDirections
            });
            //================

            dispatch(setEntityInternalState({
                pulseCount,
                comfortConditions,
                //neighborCellsInfo: newFullInternalState.neighborCellsInfo,
                movingDirection: newFullInternalState.movingDirection,
            }));

            if(newFullInternalState.movingDirection) 
                move(newFullInternalState.movingDirection, setCoordOffsetsForDirection);


            setFullInternalState(newFullInternalState);
        }, pulsePeriod);
    }, [fullInternalState.pulseCount]);
    /*Вызов этого эффекта будет происходить только при изменении fullInternalState.pulseCount - т.е., только тогда, когда рендеринг вызван изменением внутреннего состояния Существа (т.к. не бывает изменений этого состояния без изменения fullInternalState.pulseCount, а извне этот параметр изменить невозможно). Это сделано как предохранитель от вызова эффекта при рендеринге, вызванном внешними причинами (изменением пропсов - они меняются всякий раз при рендеринге <Area />, поскольку меняется передаваемый в пропсах объект connectorWithWorld). В отсутствие такого предохранителя начинают неконтролируемо размножаться вызовы setTimeout().*/

    return null;
}