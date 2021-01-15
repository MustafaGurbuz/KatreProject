import React, { Component } from 'react';
import classes from './RightSideInfo.css';

class RightSideInfo extends Component {
    render() {
        return (
            <div className={classes.RightSideInfo}>
                <p>Öncelik: <strong style={{ color: "orange" }}>Orta</strong></p>
                <p>İlgili Birim: <strong>Bilgi Teknolojileri</strong></p>
                <p>Kategori: <strong>Office Programları</strong></p>
                <p>Geçen Zaman: <strong>1 Gün 2 Saat</strong></p>
            </div>
        );
    }
}

export default RightSideInfo;