import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import '../recomendados/recomendados.css';
import RecomendadosBuscar from './buscar';
import RecomendadosCrear from './crear';

export default class Recomendados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar"
         }
    }
    render() { 
        return (
            <Container id= "recomendados-buscar-container" >
                <Row>
                    <Nav fill variant="tabs" defaultActiveKey="/buscar"
                        onSelect={(eventKey) =>
                            // console.log(eventKey)
                            this.setState({ currentTab: eventKey })}
                    >
                    <Nav.Item>
                    <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="crear">Crear</Nav.Link>
                    </Nav.Item>
  
                    </Nav>
                    <Row>
                        {this.state.currentTab === "buscar" ? (
                            <RecomendadosBuscar /> 
                        ) : (
                        <RecomendadosCrear /> 
                        )}
                    </Row>
</Row>

            </Container>

         );
    }
} ;