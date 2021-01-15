import React from 'react';
import classes from './MessageControl.css'

const messageControl = (props) => (

    <li className={classes.MessageControl}>
        <a
            className={props.active ? classes.active : null}
            href={props.link}
        >{props.children}</a>
        <p><strong style={{ color: "purple", fontSize: "20px" }}>Talep Detayları</strong>
            <strong style={{ fontSize: "20px" }}> - Excel Makroları Hakkında</strong></p>
    </li>

);

export default messageControl;