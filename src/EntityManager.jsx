import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {DEFAULTS} from './defaults.js';

export default function EntityManager(props) {
    const entityPulseCount = useSelector((state) => state.entityInternalState.pulseCount);
    const entityMovingDirection = useSelector((state) => state.entityInternalState.movingDirection);
    const entityComfortDifficulty = useSelector((state) => state.entityInternalState.comfortConditions.maxDifficulty);
    const movingDirectionTextColor = entityMovingDirection ? "black" : "green";

    //&bull; - это html-код спецсимвола "буллит", точки-маркера списка (см. https://html5book.ru/specsimvoly-html/)
    //Не могу применить здесь сам список, т.к. в консоли выдаются предупреждения, что список <ul> (почему-то) не может быть потомком <p> (в <p> преобразуются теги <Typography>).
    return (
        <ThemeProvider theme={createTheme(DEFAULTS.mui_Theme)}>
            <Box sx={DEFAULTS.mui_TabPanelSx}>
                <Box sx={{width: "300px", border: "1px solid black", p: "5px"}}>
                    <Typography variant="body1" color="myColor.main">
                        PULSE COUNT: <span style={{color: "black"}}>{entityPulseCount}</span><br/>
                        MOVING DIRECTION: <span style={{color: movingDirectionTextColor}}>{entityMovingDirection || "no moving"}</span>
                        <br/><br/>
                        COMFORT CELL CONDITIONS:<br/>
                            <span style={{marginLeft: "10px"}}>&bull; max difficulty: <span style={{color: "black"}}>{entityComfortDifficulty}</span></span>
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}