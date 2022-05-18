import React, { useState , useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList";
import {products} from "../../data/productos"

export default function ItemListContainer ({categoryId}) {
    const [data, setData] = useState ([]);

    React.useEffect(() => {
        if (categoryId) {
            setData(products.filter(data => data.categoryId === +categoryId));
        }
        else {
            setData(products);
        }
        
    },[categoryId])

    return (
        <Container>
            <Row> . 
                <Col>
                <h2>Aquí encontrarás productos para perros de Royal Canin y Eukanuba.</h2> 
                </Col>
            </Row>
            <Row>
                <ItemList data={data} />
            </Row>
        </Container> 
    );
}


    // useEffect (() => {
    //     const getData = new Promise(resolve => {
    //         setTimeout(()=>{
    //             resolve(products);
    //         },9000)
    //     });

    //     getData.then(res => setData(res));
    // },[])
