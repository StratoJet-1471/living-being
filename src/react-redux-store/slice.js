import { createSlice } from '@reduxjs/toolkit';

import {DEFAULTS} from "../defaults.js";
import {createInitialWorldState,
    createAreaCellsData_Empty,
    createAreaCellsData_LowDifficulty} from "../utilities.js";

export const stateSlice = createSlice({
    name: "worldState",
    initialState: createInitialWorldState(DEFAULTS.areaDimensionsObj),
    
    reducers: {
        createArea: (state, value) => {
            if(value.payload.difficultyLevel=="low") {
                state.cells = createAreaCellsData_LowDifficulty(DEFAULTS.areaDimensionsObj);
            }
            else state.cells = createAreaCellsData_Empty(DEFAULTS.areaDimensionsObj);
        },

        setCellData: (state, value) => {
            ((state.cells[Number(value.payload.y)-1])[Number(value.payload.x)-1]).difficulty = Number(value.payload.difficulty);
        },

        setEntityInternalState: (state, value) => {
            if(Number.isInteger(value.payload.pulseCount)) state.entityInternalState.pulseCount = value.payload.pulseCount;

            if(value.payload.movingDirection) state.entityInternalState.movingDirection = value.payload.movingDirection;

            if(value.payload.neighborCellsInfo) state.entityInternalState.neighborCellsInfo = value.payload.neighborCellsInfo;
        },


        //"force" - чтобы показать, что эта установка позиции не происходит по воле Существа (для изменения позиции по его воле есть другой actionCreator - changeEntityPosition()), а вызвана кодом более высокого уровня (в частности, <Area/>).
        forceSetEntityPosition: (state, value) => { 
            state.entityPosition = value.payload;
        },

        changeEntityPosition: (state, value) => {

        },

    }
});

/*
Значение, возвращаемое ф-ей createSlice() (см. https://redux-toolkit.js.org/api/createSlice#return-value):
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>
}
Each function defined in the reducers argument will have a corresponding action creator generated using createAction 
and included in the result's actions field using the same function name.
The generated reducer function is suitable for passing to the Redux combineReducers function as a "slice reducer".
*/

export const {createArea, setCellData, setEntityInternalState, forceSetEntityPosition} = stateSlice.actions;
export const worldStateReducer = stateSlice.reducer;