import React, { useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const MyContext = React.createContext("Special Ring");
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = "Ring";
    const handleHouse = () => {
        let countHoust = house + 1;
        setHouse(countHoust);
    };
    return (
        <>
            {/* using context api provider only send special one */}
            <MyContext.Provider value={house}>
                <h1>Grandpa : {house}</h1>
                <div className="grandpa">
                    <button className="handleBtn" onClick={handleHouse}>
                        Add house
                    </button>
                    <Father house={house} ornament={ornament} />
                    <Aunty house={house} />
                    <Uncle house={house} />
                </div>
            </MyContext.Provider>
        </>
    );
};

export default Grandpa;
