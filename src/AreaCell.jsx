import React, {useState} from 'react';
import Popover from '@mui/material/Popover';
import Button from '@material-ui/core/Button';

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
//<Button onClick={handleClick}>Open popover</Button>
    return (
        <div className="area__cell" onClick={handlePopoverOpening}>
            <div>{props.children}</div>
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
                    <AreaCellManager closingFunc={handlePopoverClosing}/>
                </Popover>
            </div>
        </div>
        );
}