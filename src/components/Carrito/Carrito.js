import React, {useContext , useEffect , useState} from "react";
import {CartContext} from "../../Context/CartContext";
import {Link} from "react-router-dom"


export function Carrito() {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLenght, setProductsLenght] = useState(0);
    const { cart, addToCart, removeFromCart, deleteAll, isInCart } = useContext(CartContext);

    useEffect(() => {
        setProductsLenght(cart.reduce((prev, curr) => prev + curr.quantity, 0));
    }, [cart]);

    const total = cart.reduce(
        (prev, curr) => prev + curr.price * curr.quantity, 0);

    console.log(cart)


    return (
        <>
        <div className="cart">
            { cart.length > 0 ? (
                <div className="cart-container">
                <div className="cart-items">
                    {cart.map(product => (
                        <div className="cart-item" key={product.id}>
                                <div className="item-details">
                                    <img src={product.image} alt={product.title} />
                                    <h4>{product.title}</h4>
                                    <p>Precio:$ {product.price}</p>
                                        <div className="cart-item-actions">
                                            <span>Cantidad: {product.quantity}</span>
                                            <button onClick={() => addToCart(product)}>+</button>
                                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                                        </div>
                                </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h3>Total: ${total}</h3>
                    <button>Comprar</button>
                    <button onClick={() => deleteAll()}>Remove all</button>
                </div>
                </div>
            ) : (
                <div className="cart-empty">
                    <h3>No hay productos en el carrito</h3>
                    <Link to="/">Volver a la tienda</Link>
                </div>
            )}


        </div>

        </>

    );
}

export default Carrito;


