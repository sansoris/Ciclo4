import React from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
     
    }
    render() { 
      return (
          
        <Container >
           <div class="text-bg" style={{ "font-size":150 }}>
                            <span>Bienvenido </span>
                            <h3>Usuario Autorizado</h3>
          </div>
                <Row>
                    <Col>
        <Dropdown style={{ "width": 100, "margin-top": 15}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ "background-color": '#8b0000', "border-color": '#8b0000' }}>
    Tareas autorizadas
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Gestión Usuarios</Dropdown.Item>
    <Dropdown.Item href="/recomendados">Gestión Recomendados</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Gestión Comentarios</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Col>
          </Row>
          
        </Container>
        
);
    }

}

