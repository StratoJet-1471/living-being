import React from 'react';
import { useSelector } from 'react-redux';

import Area from "./Area.jsx";
import EnvironmentInfluencePanel from "./EnvironmentInfluencePanel.jsx";

export default function Being(props) {
    const moodLevel = useSelector((state) => state.moodLevel);
    const influencePanelRef = React.createRef();

    return (
        <>
            <Area/>
            <div>Mood level: {moodLevel}</div>
            <EnvironmentInfluencePanel ref={influencePanelRef}/>
        </>
    );
}