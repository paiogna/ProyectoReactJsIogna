import {Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemList () {
    return (
        <Card style={{ width: '19rem' }} >
            <Card.Img variant="top" src="img/royalCaninMin.jpeg" />
            <Card.Body>
                <Card.Title>Royal Canin Mini Adulto</Card.Title>
                <Card.Text>
                Paquete 3 Kg. Precio: $3280.
                </Card.Text>
                <AddButton />
            </Card.Body>
        </Card>
    )
}