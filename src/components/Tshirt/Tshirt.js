import React from "react";
import "./Tshirt.css";
const Tshirt = (props) => {
    const { eventHandleAddToCart } = props;
    const { name, picture, price } = props.tshirt;
    return (
        <div className="tshirt-container">
            <img className="cart-img" src={picture} alt="" />
            <p>Price : ${price}</p>
            <p>{name}</p>
            <button onClick={() => eventHandleAddToCart(props.tshirt)} className="cart-btn">
                Add To Cart
            </button>
        </div>
    );
};

export default Tshirt;
