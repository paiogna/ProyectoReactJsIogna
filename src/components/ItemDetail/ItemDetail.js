import React, {useState} from 'react';
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import {toast} from "react-toastify"
import {Link} from "react-router-dom"
import { CartContext } from "../../Context/CartContext";


export const ItemDetail =({data}) => {
    const {addToCart, isInCart} = React.useContext (CartContext)
    const [goToCart, setGoToCart] = useState (false);
    const [count, setCount] = useState (1);

    const onAdd = (quantity) => {
        setGoToCart (true);
        toast.success(`Se agregaron ${quantity} unidades al carrito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <div className="item-detailContainer">
            <div className="detail">
                <img className="imgDetail" src={data.image} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.descripcion} </p>
                    <h2>${data.price}</h2>
                    {!isInCart(data.id) ? (
                            <ItemCount
                            initial={1}
                            onAdd={() => addToCart(data, count)}
                            count={count}
                            setCount={setCount}
                            stock={data.stock}
                            />
                            ) : (
                                <button>Ir al carrito</button>
                            )
                    }
                    {/* {!isInCart (data.id) ? (
                        <ItemCount initial={1} count={count}
                        setCount={setCount} stock={data.stock} onAdd={() => addToCart(data, count)} />
                        ) : (
                        <Link to="/cart">Terminar la compra</Link>  
                    )} */}
                    {/* // {
                    //     goToCart 
                    //         ? <Link to="/cart">Terminar la compra</Link>
                    //         :<ItemCount initial={1} stock={data.stock} count={count}
                    //         setCount={setCount} onAdd={() => addToCart(data, count)} />
                    // }
                     */}

                </div>
            </div>
        </div>
    );
}

export default ItemDetail;