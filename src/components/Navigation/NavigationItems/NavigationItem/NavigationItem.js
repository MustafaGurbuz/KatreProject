import React from 'react';
import classes from './NavigationItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <FontAwesomeIcon icon={faSearch} size="2x"
            style={{ color: "lightgray", margin: "10" }} />
        <input type="text" placeholder="Birşeyler Ara" />
        <a
            className={props.active ? classes.active : null}
            href={props.link}
        >{props.children}</a>
    </li>
);

export default navigationItem;