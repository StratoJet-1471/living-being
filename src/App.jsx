import React from 'react';

import { Provider } from 'react-redux';
import store from './react-redux-store/store.js';

import Entity from "./Entity.jsx";
import Area from "./Area.jsx";
import ControlPanel from "./ControlPanel.jsx";

export default function App(props) {    
    return (
        <Provider store={store}>
            <div>
                <Entity startAreaCellNumber={1}/>
                <Area/>
                <ControlPanel/>
            </div>
        </Provider>
    );
}