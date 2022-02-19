import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {DEFAULTS} from './defaults.js';

export default function About(props) {
    return (
        <ThemeProvider theme={createTheme(DEFAULTS.mui_TabPanelTheme)}>
            <Box sx={DEFAULTS.mui_TabPanelSx}>
                <Box sx={{width: (DEFAULTS.baseWidth-10)+"px", border: "1px solid black", p: "5px", backgroundColor: 'tabColor.main'}}>
                    <Typography variant="h5" color="tabColor.darker">
                        Version 1.0.0
                    </Typography>
                    <Typography variant="body1" color="tabColor.darker">
                        The Living Being (the Entity) lives in a world made up of cells and looks for a cell with suitable "living conditions". In this version, the only one cell parameter is implemented - "difficulty". <br/>
                        In the beginning, all the cells are in the conditions, comfort for the Entity, so, it has not reasons to move to anywhere. To start the Entity's journey you should change the state of its current cell at least. <br/>
                        You can set the "difficulty" for each individual cell by clicking on it; you can also set random "difficulty" values ​​for all the cells at once, using the "Set random difficulty values" button in the "Area manager" tab.
                        The "Entity manager" tab allows you to monitor the Entity life params, such as moving direction and comfort cell difficulty value. The "Pulse count" fixes clock cycles of the world mechanism, which are simultaneously the Entity pulse beats.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}