import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './login.css';

export default class  login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass:'',
        };
    }
    
    // metodo de iniciar sesión
    iniciarSesion() {
        alert(`usuario:${this.state.usuario} - password: ${this.state.pass}`)
    }
    
    render() {
        return (  
            <Container id="login-container" >
                <Row>
                    <Col>
                        <Row>
                    <h2> INICIAR SESIÓN </h2>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}
                          >
                
        <Form>
        <Form.Group>
            <Form.Label> Usuario</Form.Label>
                                <Form.Control
                                    placeholder="Usuario"
                                    onChange={(e) =>
                                        this.setState({usuario:e.target.value })
                                    }
                                />
                                {/* {
                                    this.state.usuario 
                                } */}
                </Form.Group>

        <Form.Group >
            <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password" placeholder="Contraseña"
                                       onChange={(e) =>
                                        this.setState({pass:e.target.value })
                                    }
                                />
                                {/* {
                                    this.state.pass
                                } */}

                                </Form.Group>
                    
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={() => {
                                             this.iniciarSesion();
                                        }}
                            >Iniciar Sesión
                </Button>
                </Form>
                </Col>
                </Row>
                </Col>
                </Row>
        </Container>
        );
    }
  }
   