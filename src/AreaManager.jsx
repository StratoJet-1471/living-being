import React from 'react';
import { useDispatch } from 'react-redux';

import {createArea} from './react-redux-store/slice.js';

export default function AreaManager(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(createArea({difficultyLevel: "low"}))}>Create low difficulty Area</button>
        </div>
    );
}