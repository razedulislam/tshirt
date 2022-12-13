import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Special = ({ ornament }) => {
    const house = useContext(MyContext);
    return (
        <div>
            <h1>Special Gift : {ornament}</h1>
            <h1> {house}</h1>
        </div>
    );
};

export default Special;
