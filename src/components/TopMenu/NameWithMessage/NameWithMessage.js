import React from 'react';
import classes from './NameWithMessage.css';

const nameWithMessage = (props) => (
    <div className={classes.NameWithMessage}>
        <p className={classes.DesktopOnly}>Merhaba <strong>Canan</strong>, Katre Isı Business Team Portalı‘na Hoşgeldin</p>
    </div>
);

export default nameWithMessage;