import React, { useState , useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList";
import { getFirestore , getDoc , getDocs, collection,  doc , query , where } from "firebase/firestore";

export default function ItemListContainer ({categoryId}) {
    const [data, setData] = useState ([]);

    // React.useEffect(() => {
    //     if (categoryId) {
    //         setData(products.filter(data => data.categoryId === +categoryId));
    //     }
    //     else {
    //         setData(products);
    //     }
        
    // },[categoryId])

    React.useEffect(() => {
        const db = getFirestore();
        // const productRef = doc (db , "productos" , "AA5kqrxIi0G4rMk1Gd0x");
        // getDoc (productRef).then (snapshot => {
        //     if (snapshot.exists()) {
        //         // console.log (snapshot.id);
        //         // console.log(snapshot.data());
        //     }
        // })
        
    

    
    const productsRef = collection (db , "productos");
    getDocs (productsRef).then (snapshots => {
        if (snapshots.size === 0) { 
            console.log("No hay productos");
        }
        setData(snapshots.docs.map (doc => ({ id: doc.id , ...doc.data() }))) ;
            
        
    })

    if (categoryId) {
    const q = query(collection(db , "productos") , where("categoryId" , "==" , categoryId));
    getDocs (q).then (snapshots => {
        if (snapshots.size === 0) { 
            console.log("No hay productos");
        }
        setData(snapshots.docs.map (doc => ({ id: doc.id , ...doc.data() }))) ;
            
        
    })
}
}, [categoryId])



    return (
        <Container>
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
