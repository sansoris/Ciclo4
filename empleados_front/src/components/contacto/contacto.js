import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./contacto.css";

export default class contacto extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
    };
}

    render() {
        return (
        <Container id="contacto-container">
            <Row>
                <Col>
                <Row>
                <h2> Contáctanos llenando todos los campos </h2>
                </Row>

            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Apellido" />
                </Form.Group>
            </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" />
                </Form.Group>             

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control />
                </Form.Group>             

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Telefóno</Form.Label>
                    <Form.Control />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Por favor escriba su comentario a continuación</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
            </Form>
        </Col>
        </Row>
    </Container>
    );
}
}
