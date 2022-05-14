import React, { useState , useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

const producto1 = {
    id: 1,
    title: "Royal Canin Mini",
    descripcion: "Royal Canin Mini Adulto 7,5Kg. Royal Canin Mini Adulto es un alimento Súper Premium para perros adultos con edades entre los 10 meses y 8 años. Este alimento favorece notablemente su organismo protegiendo la salud bucal, con fosfato sódico que retiene el calcio contenido en la saliva. Protege la piel y el pelo con vitaminas y aminoácidos que evitan la intromisión de bacterias.",
    stock: 3,
    price: 3280,
    image: "img/royalCaninMin.jpeg",
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(producto1);
            }, 2000);
        });
        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;