import React from "react";
import Special from "../Special/Special";

const Myself = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>Myself : {house}</h1>
            <Special ornament={props.ornament} />
        </div>
    );
};

export default Myself;
