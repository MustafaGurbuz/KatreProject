import React from 'react';
import classes from './SituationMessage.css';

import MiddleSideSituation from './MiddleSideSituation/MiddleSideSituation';
import RightSideInfo from './RightSideInfo/RightSideInfo';

const situationMessage = () => (
    <div className={classes.SituationMessage}>
        <MiddleSideSituation />
        <RightSideInfo />
    </div>
);

export default situationMessage;