import React from 'react';
import burgerlogo from '../../assets/Images/logo.png';
import classes from './Logo.css';

const logo=(props)=>(
    <div className={classes.Logo}>
        <img src={burgerlogo} alt="MyBurger"></img>
    </div>
);

export default logo;