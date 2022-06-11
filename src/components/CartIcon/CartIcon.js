import React from "react";
import {Link} from "react-router-dom"
import { CartContext } from "../../Context/CartContext";

export default function CartIcon () {
    // const { cart } = React.useContext(CartContext);

    return (
        <div className="cartIcon">
            <Link to="/Cart">
            <img src="/img/CartIcon.png" alt="imgCart" />
            {/* <span className="badge">
                {cart.length}
            </span> */}
            </Link>
        </div>
    )
}


