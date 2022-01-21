import { configureStore } from '@reduxjs/toolkit';
import {worldStateReducer} from './slice.js';

import {DEFAULTS} from "../defaults.js";
import {createInitialWorldState} from "../utilities.js";

export default configureStore({
    reducer: worldStateReducer,    

    preloadedState: createInitialWorldState(DEFAULTS.areaDimensions)
  })