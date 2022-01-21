import React from 'react';

import { Provider } from 'react-redux';
import store from './react-redux-store/store.js';

//import Being from "./Being.jsx";
import Area from "./Area.jsx";
import ControlPanel from "./ControlPanel.jsx";

export default function App(props) {    
    return (
        <Provider store={store}>
            <div>
                <Area/>
                <ControlPanel/>
            </div>
        </Provider>
    );
}