import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Area(props) {
    const entityPulseCount = useSelector((state) => state.entityPulseCount);

    return (
        <span>PULSE COUNT: {entityPulseCount}</span>
    );
}