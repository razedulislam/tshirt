import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link className="header-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/OrderReview">Order Review</Link>
                    </li>
                    <li>
                        <Link to="/grandpa">Grandpa</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
