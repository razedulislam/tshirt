import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import "./Father.css";

const Father = (props) => {
    return (
        <>
            <div className="father">
                <h1>Father house: {props.house}</h1>
                <Myself house={props.house} ornament={props.ornament} />
                <Sister house={props.house} />
                <Brother house={props.house} />
            </div>
        </>
    );
};

export default Father;
