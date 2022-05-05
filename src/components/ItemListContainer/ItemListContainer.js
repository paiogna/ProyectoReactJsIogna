import AddButton from "../AddButton/AddButton";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer ({greetings1, greetings2, greetings3}) {
    return (
        <Container>
            <Row>
                <Col>
                <h2>Aquí encontrarás productos para {greetings1} , {greetings2} y {greetings3}.</h2> 
                </Col>
            </Row>
            <Row>
                <ItemList />
            </Row>
        </Container> 
    );
}