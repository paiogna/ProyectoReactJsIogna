import React from 'react';

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState((localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'))) || []);

    console.log(cart)
    // addToCart 
    const addToCart = (data,count) => {
        if (isInCart(data.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === data.id) {
                    cartItem.quantity++
            }
            return cartItem
            })
            setCart(newCart)
        }
            else {
                setCart([...cart, {...data, quantity: +count}])
        }
    }

    // removeFromCart
    const removeFromCart = (id) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== id)
        setCart(newCart)
    }

    // deleteAll
    const deleteAll = () => {
        setCart([])
    }

    // isInCart
    const isInCart = (id) => {
        return cart.find(data => data.id === id)
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