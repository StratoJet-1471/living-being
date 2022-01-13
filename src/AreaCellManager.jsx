import React from 'react';

import "./css/style.css";

export default function AreaCellManager(props) {
    const handleClose = (event) => {
        event.stopPropagation();
        props.closingFunc();
    };

    return <div style={{backgroundColor: "yellow"}} onClick={handleClose}>MANAGER</div>
}