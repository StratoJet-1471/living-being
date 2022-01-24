import React, {useState} from 'react';
import Popover from '@mui/material/Popover';
import { useSelector } from 'react-redux';

import AreaCellManager from './AreaCellManager.jsx';

import "./css/style.css";
import { DEFAULTS } from './defaults.js';

export default function AreaCell(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const entityPosition = useSelector((state) => state.entityPosition);

    let controlsLayerStyle = {};
    let cellCoordsStyle = {};
    let cellDifficultyStyle = {};
    let entityLayerElement = null;

    const handlePopoverOpening = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClosing = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    if(entityPosition.x==Number(props.cellData.x) && entityPosition.y==Number(props.cellData.y)) {
        entityLayerElement = (
            <div style={{zIndex: 1}} className="area__cell-entity-layer">
                <img src={DEFAULTS.designElementsPath + "Icon-entity.png"}/>
            </div>);
        controlsLayerStyle.zIndex = 2;
        cellCoordsStyle.color = "black";
        cellDifficultyStyle.color = "black";
    }

    //props.cellData = {x:value, y:value, difficulty: value}
    return (
        <div className="area__cell" onClick={handlePopoverOpening}>
            {entityLayerElement}
            <div className="area__cell-controls-layer" style={controlsLayerStyle}>
                <span style={cellCoordsStyle} className='area__cell-coords'>{"{" + props.cellData.x + ", " + props.cellData.y + "}"}</span>
                <span style={cellDifficultyStyle} className='area__cell-difficulty'>Diff: {props.cellData.difficulty}</span>
                <div>                
                    <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClosing}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    sx={{width: "300px"}}>
                        <AreaCellManager closingFunc={handlePopoverClosing} cellData={props.cellData}/>
                    </Popover>
                </div>
            </div>
        </div>
        );
}