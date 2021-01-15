import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import classes from './AlertMessage.css';

const alertMessage = () => (
    <div className={classes.AlertMessage}>
        <FontAwesomeIcon
            icon={faExclamationCircle}
            size="1x"
            style={{ margin: "10px", marginTop: "13px", fontSize: "25px", color: "red" }} />
        <p>Bu talep <strong>29.01.2019, 09:25 </strong>tarihinde <strong>tamamlanmıştır.</strong></p>
    </div>
);

export default alertMessage;