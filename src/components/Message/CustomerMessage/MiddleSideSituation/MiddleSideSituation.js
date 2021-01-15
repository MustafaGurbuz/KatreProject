import React, { Component } from 'react';
import classes from './MiddleSideSituation.css';

class MiddleSideSituation extends Component {
    render() {
        return (
            <div className={classes.MiddleSideSituation}>

                <p className={classes.pFirst}> Murat Bey Merhaba</p>

                <p className={classes.pSecond}>
                    BA07 kodlu bilgisayarımda Excel makrolar tanımlı olmasına rağmen hata vermektedir,
                    Konuyla ilgili yardımcı olmanızı rica eder iyi çalışmalar dilerim.
                </p>
            </div>
        );
    }
}

export default MiddleSideSituation;