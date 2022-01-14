import React from 'react';
import { useSelector } from 'react-redux';

import AreaCell from './AreaCell.jsx';
import "./css/style.css";

export default function Area(props) {
    const cellInfoObjects = useSelector((state) => state.cells);
    const cells = cellInfoObjects.map((item, index) => <AreaCell key={index}>{item}</AreaCell>);

    return (
        <div className="area">{cells}</div>
    );
}