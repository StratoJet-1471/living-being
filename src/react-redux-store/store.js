import { configureStore } from '@reduxjs/toolkit';
import {worldStateReducer} from './slice.js';

import {DEFAULTS} from "../defaults.js";
import {createAreaCellsData_Empty} from "../utilities.js";

export default configureStore({
    reducer: worldStateReducer,    
    preloadedState: {
      cells: createAreaCellsData_Empty(DEFAULTS.areaCellsNumber), 
    }
    
  })