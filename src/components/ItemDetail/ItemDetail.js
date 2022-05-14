import React from 'react';
import "./ItemDetail.css"

export const ItemDetail =({data}) => {
    return (
        <div className="item-detailContainer">
            <div className="detail">
                <img className="imgDetail" src={data.image} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.descripcion} </p>
                    <h2>${data.price}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;