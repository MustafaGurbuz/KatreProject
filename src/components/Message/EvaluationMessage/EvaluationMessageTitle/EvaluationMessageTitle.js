import React from 'react';

const evaluationMessageTitle = (props) => (
    <div style={{
        fontSize: "35px",
        fontStyle: "italic",
        color: "gray",
        marginLeft: "150px"
    }}>
        <p>{props.children}</p>
    </div>
);

export default evaluationMessageTitle;