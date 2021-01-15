import React, { Component } from 'react';
import classes from './LeftSideInfo.css';

class LeftSideInfo extends Component {
    render() {
        return (
            <div className={classes.LeftSideInfo}>
                <h3>Canan KILIÇ</h3>
                <p>Muhasebe Uzmanı</p>
                <p>Balıkesir Şube</p>
            </div>
        );
    }
}

export default LeftSideInfo;