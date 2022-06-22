import {Container, Row, Col} from "react-bootstrap"

export default function Footer () {
    return (
        <footer className="footer font">
            <Container>
                <Row>
                    <Col>
                        <p>Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}