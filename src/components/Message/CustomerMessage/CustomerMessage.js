import React from 'react';
import MiddleSideSituation from './MiddleSideSituation/MiddleSideSituation';
import classes from './CustomerMessage.css';
import LeftSideInfo from './LeftSideInfo/LeftSideInfo';

const customerMessage = () => (
    <div className={classes.CustomerMessage}>
        <LeftSideInfo />
        <MiddleSideSituation />
    </div>
);

export default customerMessage;