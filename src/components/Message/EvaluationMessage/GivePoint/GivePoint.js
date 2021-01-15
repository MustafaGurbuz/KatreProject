import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from './GivePoint.css';
import Link from '../../SelectMultiMenu/SubSelectMultiMenu/Link';

class GivePoint extends Component {
    render() {
        return (
            <div className={classes.GivePoint}>
                <p>5</p>
                <Link link="/">
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange", fontSize: "35px", marginLeft: "-15px" }} />
                </Link>
                <Link link="/">
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange", fontSize: "35px", marginLeft: "-15px" }} />
                </Link>
                <Link link="/">
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange", fontSize: "35px", marginLeft: "-15px" }} />
                </Link>
                <Link link="/">
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange", fontSize: "35px", marginLeft: "-15px" }} />
                </Link>
                <Link link="/">
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange", fontSize: "35px", marginLeft: "-15px" }} />
                </Link>

            </div>
        );
    }
}

export default GivePoint;