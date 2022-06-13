import React from "react"

import { doc,getDoc,updateDoc,addDoc,runTransaction,collection,getFirestore,} from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";

function Form() {
    const { cart } = React.useContext(CartContext);
    const [data, setData] = React.useState()
    console.log(data)
    const [orderId, setOrderId] = React.useState()
    console.log(orderId)


    // Guardamos los datos del formulario en un estado cada vez que se modifica un campo
    const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    }

    const total = cart.reduce(
        (prev, curr) => prev + curr.price * curr.quantity, 0);
        console.log(total);

  // Accion que se ejecuta al hacer click en el boton para enviar el formulario
    const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
        buyer: data,
        items: cart,
        total: total,
    };
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const productsCollection = collection(db, "productos")
    await addDoc(ordersCollection, order).then(({id}) => {
        setOrderId(id)
        updateProducts()
        })
    }

  // Batch update de productos una vez generada la orden
    const updateProducts = async () => {
    const db = getFirestore ()
    cart.forEach( async (item) => {
        const productRef = doc(db, `productos`, item.id)
        await runTransaction(db, async (transaction) => {
        const transfDoc = await transaction.get(productRef);
        if (!transfDoc.exists()) {
        console.error("El documento no existe")
        }
        const newStock = transfDoc.data().stock - item.quantity;
        transaction.update(productRef, { stock: newStock });
    });
    })
    }
  // Updateo 1 producto solo 
    const handleUpdateOneProduct = () => {
    const db = getFirestore();
    const productDoc = doc(db, "productos", "sXARY8G62PxwaRxzNeFX");
    updateDoc(productDoc, { stock: 2 });
    }


return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <h1>Checkout</h1>
            <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            />
            <input
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            />
            <input
            type="submit"
            value="Finalizar compra"
            />
        </form>
    </div>
    );
}

export default Form;