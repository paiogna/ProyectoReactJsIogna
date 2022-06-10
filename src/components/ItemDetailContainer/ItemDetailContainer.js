import React, { useState , useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
// import {products} from "../../data/productos"
import { getFirestore , getDoc ,  doc } from "firebase/firestore";


export const ItemDetailContainer = ({productId}) => {
    const [data, setData] = useState ({});

    React.useEffect (() => {
        const db = getFirestore();
        const productRef = doc (db , "productos" , productId);
        getDoc (productRef).then (snapshot => {
            if (snapshot.exists()) {
                setData({ id: snapshot.id, ...snapshot.data() });
            }
        })
        

        // setData (products.find(data => data.id === productId))
    }, [productId] );

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;