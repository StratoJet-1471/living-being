import React from 'react';
import { useDispatch } from 'react-redux';

import {niceMood} from './react-redux-store/slice.js';

const EnvironmentInfluencePanel = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();

    return (
        <div ref={ref}>
            <button onClick={() => dispatch(niceMood())}>Give him drug</button>
        </div>
    );
});

export default EnvironmentInfluencePanel;