import React from 'react';
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import {toast} from "react-toastify"

export const ItemDetail =({data}) => {

    const onAdd = (quantity) => {
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
                    <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;