import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
export default class  login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <Container id="login-container" style={{ marginTop: 200 }}>
        <Form>
        <Form.Group >
            <Form.Label style= {{ float: 'left' }}>Usuario</Form.Label>
            <Form.Control type="email"  />
                </Form.Group>

        <Form.Group >
            <Form.Label style= {{ float: 'left' }}>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                    
        <Button variant="primary" type="submit" style= {{marginTop:20 }}>
            Iniciar Sesión
                </Button>
        </Form>
            
        </Container>
        );
    }
  }
   