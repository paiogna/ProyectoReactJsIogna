import {Card, Button} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from "react-toastify"

export default function Item ({productImage,productTitle,productPrice,productStock,productId}) {
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
        <Card style={{ width: '18rem', height: 'auto' }} className={productId}>
            <Card.Img variant="top" src={productImage} style={{height: '250px', width: 'auto'}}/>
            <Card.Body className="card-body">
                <Card.Title className="card-title">{productTitle} </Card.Title>
                <Card.Text> 
                    Precio: ${productPrice} / Stock: {productStock} u.
                </Card.Text>
                <Button variant="primary">Ver detalle del producto</Button>
                <ItemCount initial={1} stock={productStock} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

