import React from 'react';
import classes from './ToolbarLeft.css';
import NavigationItems from '../../LeftMenu/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbarLeft = (props) => (
    <header className={classes.ToolbarLeft}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbarLeft;