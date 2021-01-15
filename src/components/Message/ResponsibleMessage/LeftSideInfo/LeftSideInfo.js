import React, { Component } from 'react';
import classes from './LeftSideInfo.css';

class LeftSideInfo extends Component {
    render() {
        return (
            <div className={classes.LeftSideInfo}>
                <h3>Cebrail İLHAN</h3>
                <p>Bilgi İşlem Uzmanı</p>
                <p>Zeytinburnu Şube</p>
            </div>
        );
    }
}

export default LeftSideInfo;