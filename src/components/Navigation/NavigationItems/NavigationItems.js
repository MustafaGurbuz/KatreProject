import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileLogo from '../../TopMenu/ProfileLogo/ProfileLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-solid-svg-icons";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            <FontAwesomeIcon icon={faBell} size="2x" />
        </NavigationItem>
        <ProfileLogo height="100%" />
    </ul>

);

export default navigationItems;