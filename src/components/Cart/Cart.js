import React, {useContext , useEffect , useState} from "react";
import {CartContext} from "../../Context/CartContext";

export function Cart() {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLenght, setProductsLenght] = useState(0);
    const { cart, addToCart, removeFromCart, deleteAll, isInCart } = useContext(CartContext);

    useEffect(() => {
        setProductsLenght(cart.reduce((prev, curr) => prev + curr.quantity, 0));
    }, [cart]);

    const total = cart.reduce(
        (prev, curr) => prev + curr.price * curr.quantity, 0);


    return (
        <div className="cart">
            <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
                <img src="/img/CartIcon.png" alt="imgCart" />
                <span className="badge">{productsLenght}</span>
                <div className={cartOpen ? "cart-content" : "cart-content-hidden"}>
                    <div className="cart-header">
                        <h1>Carrito</h1>
                        <button onClick={() => deleteAll()}>Vaciar Carrito</button>
                        <span>Total: ${total}</span>
                        <button>Comprar</button>
                        <button>Cancelar</button>
                        <button>Finalizar</button>
                        <div className="cart-content-items">
                            <Cart
                                cart={cart}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                isInCart={isInCart} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
        
