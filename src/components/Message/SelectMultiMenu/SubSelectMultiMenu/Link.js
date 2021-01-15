import React from 'react';
import classes from './Link.css';

const link = (props) => (
    <li className={classes.Link}>
        <a
            className={props.active ? classes.active : null}
            href={props.link}
        >{props.children}</a>
    </li>
);

export default link;