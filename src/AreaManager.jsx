import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

import {createArea} from './react-redux-store/slice.js';

import {DEFAULTS} from './defaults.js';

export default function AreaManager(props) {
    const dispatch = useDispatch();

    //border: '1px solid'
    return (
        <ThemeProvider theme={createTheme(DEFAULTS.mui_Theme)}>
            <Box sx={DEFAULTS.mui_TabPanelSx}>
                <Box sx={{width: "500px", border: "1px solid black", p: "5px"}}>
                    <Button variant="contained" size="small" color="primary" sx={{m: '10px', }} onClick={() => dispatch(createArea({difficultyLevel: "low"}))}>
                        Set random difficulty levels
                    </Button>
                    <Typography variant="body1" color="myColor.main">
                        You also can set the difficulty level for each individual cell by clicking on it. 
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}