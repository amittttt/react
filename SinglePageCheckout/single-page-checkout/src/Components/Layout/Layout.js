import React from 'react';
import Auxiliary from '../../Container/hoc/Auxiliary'
import ToolBar from '../../Components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
const layout = (props) =>(
    <Auxiliary>     
        <ToolBar></ToolBar>
        <main  className={classes.content}>
        {props.children}
        </main>
    </Auxiliary>
);

export default layout;