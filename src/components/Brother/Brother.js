import React from "react";

const Brother = (props) => {
    console.log(props);
    const { house } = props;
    return (
        <div>
            <h1>Brother {house}</h1>
        </div>
    );
};

export default Brother;
