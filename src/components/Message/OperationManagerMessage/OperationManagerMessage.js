import React from 'react';
import MiddleSideSituation from './MiddleSideSituation/MiddleSideSituation';
import classes from './OperationManagerMessage.css';
import LeftSideInfo from './LeftSideInfo/LeftSideInfo';

const operationManagerMessage = () => (
    <div className={classes.OperationManagerMessage}>
        <LeftSideInfo />
        <MiddleSideSituation />
    </div>
);

export default operationManagerMessage;