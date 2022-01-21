import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {entityPulseBeat} from './react-redux-store/slice.js';

function makeLifeTact() {

}

export default function Entity(props) {
    const [timeTact, setTimeTact] = useState(false); 
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            makeLifeTact();
            dispatch(entityPulseBeat());
            setTimeTact(!timeTact);
        }, 1000);
    });

    return null;
}