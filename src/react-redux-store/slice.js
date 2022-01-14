import { createSlice } from '@reduxjs/toolkit';

import {DEFAULTS} from "../defaults.js";
import {createAreaCellsDataArray_Empty,
    createAreaCellsDataArray_LowDifficulty} from "../utilities.js";

export const stateSlice = createSlice({
    name: "worldState",
    
    initialState: { 
        cells: createAreaCellsDataArray_Empty(DEFAULTS.areaCellsNumber), 
    },

    
    reducers: {
        createArea: (state, value) => {
            if(value.payload.difficultyLevel=="low") {
                state.cells = createAreaCellsDataArray_LowDifficulty(DEFAULTS.areaCellsNumber);
            }
            else state.cells = createAreaCellsDataArray_Empty(DEFAULTS.areaCellsNumber);
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

export const {createArea} = stateSlice.actions;
export const worldStateReducer = stateSlice.reducer;