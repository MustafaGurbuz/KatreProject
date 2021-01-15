import React, { Component } from 'react';
import classes from './MiddleSideSituation.css';

class MiddleSideSituation extends Component {
    render() {
        return (
            <div className={classes.MiddleSideSituation}>
                <p className={classes.pSecond}>
                    Gerekli kontroller yapılıp tarafınıza dönüş sağlanacaktır.
                </p>
            </div>
        );
    }
}

export default MiddleSideSituation;