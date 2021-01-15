import React from 'react';
import burgerLogo from '../../../assets/images/burger-logo.png';
import classes from './ProfileLogo.css';

const profileLogo = (props) => (
    <div className={classes.ProfileLogo} style={{
        height: props.height,
        marginBottom: props.marginBottom
    }}>
        <img src={burgerLogo} alt="Here is my burger" />
    </div>
);

export default profileLogo;