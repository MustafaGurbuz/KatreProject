import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faCog, faSave } from "@fortawesome/free-solid-svg-icons";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            <FontAwesomeIcon icon={faHome} size="2x" />
        </NavigationItem>
        <NavigationItem link="/">
            <FontAwesomeIcon icon={faStar} size="2x" />
        </NavigationItem>
        <NavigationItem link="/">
            <FontAwesomeIcon icon={faSave} size="2x" />
        </NavigationItem>
        <NavigationItem link="/">
            <FontAwesomeIcon icon={faCog} size="2x" />
        </NavigationItem>
    </ul>

);

export default navigationItems;