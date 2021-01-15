import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import classes from './EvaluationMessage.css';
import Link from '../SelectMultiMenu/SubSelectMultiMenu/Link';
import GivePoint from './GivePoint/GivePoint';

const evaluationMessage = () => (
    <div className={classes.EvaluationMessage}>
        <GivePoint />
        <input type="text" placeholder="Görüşmeyi birkaç cümle ile değerlendirin..." />
        <Link link="/">
            <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ margin: "20px 0", color: "dodgerblue", fontSize: "50px" }} />
        </Link>
    </div>
);

export default evaluationMessage;