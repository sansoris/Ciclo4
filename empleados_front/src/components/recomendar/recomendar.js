/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";
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
                <h2> Una vez leído terminos y condiciones, por favor diligencie todos los campos </h2>
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
                    </Form>

                 <div class="form-check">
                         <p>Relacione el (los) servicios que puede prestar </p>
                        {/* <input type="checkbox" class="form-check-input" id="checkbox1" value="" /> */}
                            <label for="checkbox1" class="form-check-label">Servicio 1</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_1', e.target.value)}
                            />
                    </div>
                    <div class="form-check">
                        {/* <input type="checkbox" class="form-check-input" id="checkbox2" value="" /> */}
                            <label for="checkbox2" class="form-check-label">Servicio 2</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_2', e.target.value)}
                            />
                    </div>
                    <div class="form-check">
                        {/* <input type="checkbox" class="form-check-input" id="checkbox3" value="" /> */}
                            <label for="checkbox3" class="form-check-label">Servicio 3</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_3', e.target.value)}
                            />
                    </div>
                   
                   
                    <div class="enviar">
                            <input class="boton" type="submit" value="Recomendar" onClick={() => console.log(this.guardarRecomendados())} />
                            {/* <Form.Control
                                onChange = {(e) => this.setValue('Servicio_4', e.target.value)}
                            /> */}
                    </div>

           
            </Col>
        </Row> 
    </Container>
            
        );
    }
}