import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AreaManager from "./AreaManager.jsx";
import EntityManager from "./EntityManager.jsx";
import About from './About.jsx';

import {DEFAULTS} from './defaults.js';

//Источник кода с табами - https://mui.com/components/tabs/#BasicTabs.js

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (children)}
      </div>
    );
  }

function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ControlPanel(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //aria-label="basic tabs example"
    return (
      <div className="control-panel">
        <ThemeProvider theme={createTheme(DEFAULTS.mui_controlPanelTabsTheme)}>
          <AppBar position="static" color="navbar" sx={{width: '700px'}}>
            <Tabs value={value} variant="fullWidth" indicatorColor="primary" textColor="secondary" onChange={handleChange}>
              <Tab label="Area Manager" {...allyProps(0)} />
              <Tab label="Entity Manager" {...allyProps(1)} />
              <Tab label="About" {...allyProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <AreaManager/>
          </TabPanel>
          <TabPanel value={value} index={1}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <EntityManager/>
              </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <About/>
          </TabPanel>
        </ThemeProvider>
      </div>
    );    
}