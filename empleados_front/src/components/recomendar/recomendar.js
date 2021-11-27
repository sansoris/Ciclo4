/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import './recomendar.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
// import { img } from '../assets/img';
// import { stylesheet } from '../assets/css/bootstrap.min.css';
// import { styles } from '../assets/css/stylesheet.css';
// import { stylesheet } from  '../assets/css/responsive.css';
// import { stylesheet } from  '../assets/css/jquery.mCustomScrollbar.min.css';
// import { stylesheet } from '../assets/css/normalize.css ';
// import { preload } from '../assets/css/styles.css';
 




export default class Recomendar extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        
    };
}

    render() {
        return (
            <Container id="recomendar-container">
            <Row>
            <Col>
                <Row>
                <legend> Una vez leído terminos y condiciones, por favor diligencie todos los campos </legend>
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
      
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Telefóno</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su teléfono"/>
                            </Form.Group>            

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su ciudad" />
                            </Form.Group>             
                            </Row>
                                 <h1>Relacione el (los) servicios que puede prestar </h1>
                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Servicio 1</Form.Label>
                                <Form.Control type="text" placeholder="Servicio 1" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label >Servicio 2</Form.Label>
                                <Form.Control type="text" placeholder="Servicio 2" />
                            </Form.Group>
      
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Servicio 3</Form.Label>
                                <Form.Control type="text" placeholder="Servicio 3"/>
                            </Form.Group>            
                          
                            </Row>
                    </Form>

                      <Button
                            variant="primary"
                            style={{"background-color": '#8b0000', "border-color": '#8b0000' }}
                            onClick={() =>
                                this.setState
                            }
                            >Crear Recomendado
                        </Button>
           
                   
                      
                            {/* <input class="boton" type="submit" value="Recomendar" onClick={() => console.log(this.guardarRecomendados())} /> */}
                           
             

           
            </Col>
        </Row> 
    </Container>
            
        );
    }
}