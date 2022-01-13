import React from 'react';
import { useDispatch } from 'react-redux';

import {initArea} from './react-redux-store/slice.js';

export default function AreaManager(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(initArea())}>Create init Area</button>
        </div>
    );
}