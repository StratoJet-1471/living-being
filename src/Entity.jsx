import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {entityPulseBeat} from './react-redux-store/slice.js';

function makeLifeTact(...callbacks) {
    callbacks.forEach((callback) => callback());
}

export default function Entity(props) {    
    //const [position, setPosition] = useState(startPosition);
    //const cellInfoObjects = useSelector((state) => state.cells);

    //Существо не должно владеть инфой обо всём мире - поэтому мы не должны получать из хранилища состояний массив всех объектов-клеток. 
    //Существо также не может по своему почину перемещаться в клетку с определёнными координатами - поэтому здесь не должно быть ф-и типа setPosition(). 
    //Существо может получать инфу только о соседних клетках (в зависимости от того, как далеко оно "видит"). И оно может перемещаться на какое-то расстояние и в каком-то направлении от текущей своей позиции. Т.е., все перемещения должны иметь вид не "переместись в клетку с такими-то координатами", а "измени свои координаты на столько-то и столько-то от текущих".
    const position = useSelector((state) => state.entityPosition);
    const [timeTact, setTimeTact] = useState(false); //timeTact может принимать значения true/false.
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            makeLifeTact(() => {

            });
            dispatch(entityPulseBeat());
            setTimeTact(!timeTact);
        }, 1000);
    });

    return null;
}