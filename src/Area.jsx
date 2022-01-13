import React from 'react';
import { useSelector } from 'react-redux';

import AreaCell from './AreaCell.jsx';
import "./css/style.css";

export default function Area(props) {
    const cellInfoObjects = useSelector((state) => state.cells);

    //const cells_templateArr = (new Array(9)).fill(null); //Создаём массив из 9 эл-тов и заполняем его весь значениями null (для неприсвоенного элемента не вызовется коллбэк ф-и map - эл-то должен иметь значение хотя бы undefined).
    //const cells_contentArr = cells_templateArr.map((_, index) => index+1);
    const cells = cellInfoObjects.map((item, index) => <AreaCell key={index}>{item}</AreaCell>);

    return (
        <div className="area">{cells}</div>
    );
}