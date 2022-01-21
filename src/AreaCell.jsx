import React, {useState} from 'react';
import Popover from '@mui/material/Popover';

import AreaCellManager from './AreaCellManager.jsx';

import "./css/style.css";

export default function AreaCell(props) {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handlePopoverOpening = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClosing = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    //props.cellData = {index:value, difficulty: value}
    return (
        <div className="area__cell" onClick={handlePopoverOpening}>
            <span className='area__cell-number'>{Number(props.cellData.index)+1}</span>
            <span className='area__cell-difficulty'>Diff: {props.cellData.difficulty}</span>
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
        );
}