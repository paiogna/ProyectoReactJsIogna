import React, { useState , useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList";
import {products} from "../../data/productos"

export default function ItemListContainer ({greetings1, greetings2, greetings3}) {
    const [data, setData] = useState ([]);

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(products);
            },3000)
        });

        getData.then(res => setData(res));
    },[])

    return (
        <Container>
            <Row>
                <Col>
                <h2>Aquí encontrarás productos para {greetings1} , {greetings2} y {greetings3}.</h2> 
                </Col>
            </Row>
            <Row>
                <ItemList data={data} />
            </Row>
        </Container> 
    );
}


