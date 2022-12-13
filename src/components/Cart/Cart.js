import React from "react";
import "./Cart.css";

const Cart = ({ cart, evevtHandlerRemoveCart }) => {
    return (
        <div>
            {cart.map((tshirt) => (
                <p>
                    {tshirt.name}
                    <button onClick={() => evevtHandlerRemoveCart(tshirt)}>X</button>
                </p>
            ))}
        </div>
    );
};

export default Cart;
