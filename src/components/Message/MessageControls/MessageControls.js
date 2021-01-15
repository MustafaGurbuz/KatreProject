import React from 'react';
import classes from './MessageControls.css';
import MessageControl from './MessageControl/MessageControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import SelectMultiMenu from '../SelectMultiMenu/SelectMultiMenu';

const messageControls = (props) => (

    <div className={classes.MessageControls}>
        <MessageControl link="/">
            <FontAwesomeIcon
                icon={faBackward}
                size="1x"
                style={{ marginRight: "10px" }} />
                 Geri
        </MessageControl>
        <SelectMultiMenu />
    </div>

);

export default messageControls;