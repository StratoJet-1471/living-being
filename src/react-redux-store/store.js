import { configureStore } from '@reduxjs/toolkit';
import {worldStateReducer} from './slice.js';

import {DEFAULTS} from "../defaults.js";
import {createInitCellsDataArray} from "../utilities.js";

export default configureStore({
    reducer: worldStateReducer,    
    preloadedState: {
      cells: createInitCellsDataArray(DEFAULTS.areaCellsNumber), 
    }
    
  })