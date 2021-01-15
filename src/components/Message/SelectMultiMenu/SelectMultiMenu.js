import React from 'react';
import classes from './SelectMultiMenu.css';
import SubSelectMultiMenu from './SubSelectMultiMenu/SubSelectMultiMenu';

const selectMultiMenu = () => (
    <ul className={classes.NavigationItems}>
        <SubSelectMultiMenu />
    </ul>

);

export default selectMultiMenu;