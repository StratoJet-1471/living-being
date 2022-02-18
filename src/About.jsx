import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {DEFAULTS} from './defaults.js';

export default function About(props) {
    return (
        <ThemeProvider theme={createTheme(DEFAULTS.mui_TabPanelTheme)}>
            <Box sx={DEFAULTS.mui_TabPanelSx}>
                <Box sx={{width: "700px", border: "1px solid black", p: "5px", backgroundColor: 'tabColor.main'}}>
                    <Typography variant="h5" color="tabColor.darker">
                        Version 1.0.0
                    </Typography>
                    <Typography variant="body1" color="tabColor.darker">
                        The Living Being (Entity) lives in a world made up of cells and looks for a cell with suitable conditions. In this version, the only one cell condition is implemented - "difficulty". You can set the difficulty for each individual cell by clicking on it; you can also set random difficulty values ​​for all cells at once.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}