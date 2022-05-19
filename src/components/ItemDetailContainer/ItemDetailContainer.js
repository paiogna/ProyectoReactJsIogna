import React, { useState , useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../../data/productos"

export const ItemDetailContainer = ({productId}) => {
    const [data, setData] = useState ({});

    React.useEffect (() => {
        setData (products.find(data => data.id === productId))
    }, [productId] );

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;