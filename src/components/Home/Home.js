import React, { useState } from "react";
import useTshirt from "../../Hooks/useTshirt";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
    //use custom hook
    const [tshirts, setTshirt] = useTshirt();
    const [cart, setCart] = useState([]);

    const eventHandleAddToCart = (selectedItem) => {
        const exists = cart.find((tshirt) => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert("Hey item alreay added");
        }
    };

    const evevtHandlerRemoveCart = (selectedItem) => {
        const rest = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
        setCart(rest);
    };
    return (
        <div className="home-container">
            <div className="thisht-constainer">
                {tshirts.map((tshirt) => (
                    <Tshirt key={tshirt._id} tshirt={tshirt} eventHandleAddToCart={eventHandleAddToCart} />
                ))}
            </div>
            <div className="cart-container">
                <h1>Cart container</h1>

                <Cart evevtHandlerRemoveCart={evevtHandlerRemoveCart} cart={cart} />
            </div>
        </div>
    );
};

export default Home;
