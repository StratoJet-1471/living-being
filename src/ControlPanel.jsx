import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import AreaManager from "./AreaManager.jsx";

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

function a11yProps(index) {
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

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Area Manager" {...a11yProps(0)} />
              <Tab label="Entity Manager" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <AreaManager/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Entity Manager
            </TabPanel>
        </>
    );    
}