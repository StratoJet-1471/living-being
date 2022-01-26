import React from 'react';
import { useSelector } from 'react-redux';

export default function EntityManager(props) {
    const entityPulseCount = useSelector((state) => state.entityInternalState.pulseCount);

    return (
        <span>PULSE COUNT: {entityPulseCount}</span>
    );
}