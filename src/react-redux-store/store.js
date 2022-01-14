import { configureStore } from '@reduxjs/toolkit';
import {worldStateReducer} from './slice.js';

import {DEFAULTS} from "../defaults.js";
import {createAreaCellsDataArray_Empty} from "../utilities.js";

export default configureStore({
    reducer: worldStateReducer,    
    preloadedState: {
      cells: createAreaCellsDataArray_Empty(DEFAULTS.areaCellsNumber), 
    }
    
  })