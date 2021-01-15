import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faFlagCheckered, faClock } from "@fortawesome/free-solid-svg-icons";
import classes from './MiddleSideSituation.css';
import Link from '../../SelectMultiMenu/SubSelectMultiMenu/Link';

class MiddleSideSituation extends Component {
    render() {
        return (
            <div className={classes.MiddleSideSituation}>

                <p className={classes.pFirst}> Durum</p>

                <p className={classes.pSecond}>
                    <p><FontAwesomeIcon
                        icon={faClock}
                        size="5x"
                        style={{ marginLeft: "-47px", color: "lightslategray" }} /></p>
                    <Link link="/">
                        <FontAwesomeIcon
                            icon={faDotCircle}
                            style={{ color: "green", fontSize: "15px", marginLeft: "-15px" }} />
                        <p>Bekliyor</p>
                    </Link>
                    <Link link="/">
                        <FontAwesomeIcon
                            icon={faDotCircle}
                            style={{ color: "green", fontSize: "15px", marginLeft: "-15px" }} />
                        <p>Devam Ediyor</p>
                    </Link>
                    <Link link="/">
                        <FontAwesomeIcon
                            icon={faFlagCheckered}
                            style={{ color: "green", fontSize: "15px", marginLeft: "-15px" }} />
                        <p>Sonlandı</p>
                    </Link>
                </p>
            </div>
        );
    }
}

export default MiddleSideSituation;