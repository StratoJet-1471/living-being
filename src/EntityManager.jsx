import React from 'react';
import { useSelector } from 'react-redux';

export default function EntityManager(props) {
    const entityPulseCount = useSelector((state) => state.entityInternalState.pulseCount);
    const entityMovingDirection = useSelector((state) => state.entityInternalState.movingDirection);

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <span>PULSE COUNT: {entityPulseCount}</span>
            <span>MOVING DIRECTION: {entityMovingDirection}</span>
        </div>
    );
}