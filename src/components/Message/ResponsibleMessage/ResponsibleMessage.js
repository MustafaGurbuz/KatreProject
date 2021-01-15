import React from 'react';
import MiddleSideSituation from './MiddleSideSituation/MiddleSideSituation';
import classes from './ResponsibleMessage.css';
import LeftSideInfo from './LeftSideInfo/LeftSideInfo';

const responsibleMessage = () => (
    <div className={classes.ResponsibleMessage}>
        <LeftSideInfo />
        <MiddleSideSituation />
    </div>
);

export default responsibleMessage;