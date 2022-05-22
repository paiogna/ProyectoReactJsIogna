import React from 'react';

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    // addToCart 
    const addToCart = () => {

    }

    // removeFromCart
    const removeFromCart = () => {

    }

    // deleteAll
    const deleteAll = () => {

    }

    // isInCart
    const isInCart = () => {

    }


    return (
        <Provider value={{
            addToCart,
            removeFromCart,
            deleteAll,
            isInCart,
            cart,
        }} >{children} </Provider> 
    )
}

export {CartContext, CartProvider}