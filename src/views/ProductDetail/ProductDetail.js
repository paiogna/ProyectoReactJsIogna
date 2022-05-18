import React from 'react';
import {useParams} from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

export default function ProductDetail () {
    const {productId} = useParams ()
    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetailContainer productId={+productId}/>
        </div>
    )
}