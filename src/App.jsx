import React from 'react';

import { Provider } from 'react-redux';
import store from './react-redux-store/store.js';

//import { withStyles } from "@material-ui/core/styles";

import Area from "./Area.jsx";
import ControlPanel from "./ControlPanel.jsx";

/*
const WhiteTextTypography = withStyles({
    root: {
      color: "rgb(34, 139, 34)",
      fontFamily: "sans-serif", //НЕ работает
    }
  })(Typography);
*/

//<WhiteTextTypography variant="h1">The Living Being</WhiteTextTypography>
export default function App(props) {        
    return (
        <Provider store={store}>
            <div className='main-container'>                
                <div className="game">
                    <span className='game__main-title'>The Living Being</span>
                    <Area entityStartPos={{x:3, y:1}}/>
                    <ControlPanel/>
                </div>
            </div>
        </Provider>
    );
}