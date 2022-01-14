import React from 'react';

import "./css/style.css";

export default function AreaCellManager(props) {
    const closeManager = (event) => {
        event.stopPropagation();
        props.closingFunc();
    };

    return (
        <div className="area__cell-manager">
            <div className="area__cell-manager-body">
                <span>Set cell conditions:</span>
                <input style={{width: "90px", height: "25px"}} type="text"/>
                <button>Submit</button>
            </div>
            <div className="area__cell-manager-closing-icon-container">
                <img className="area__cell-manager-closing-icon" src="./design_elements/Icon-cross.png" alt="Close" onClick={closeManager}/>
            </div>
        </div>);
}