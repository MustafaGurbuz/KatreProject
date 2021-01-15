import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../TopMenu/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NameWithMessage from '../../TopMenu/NameWithMessage/NameWithMessage';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="100%" />
        <NameWithMessage />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;