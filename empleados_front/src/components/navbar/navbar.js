/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Navbar, Row, Nav, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import imagenes from '../assets/imagenes.js';
import './navbar.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            
            <Navbar fixed="top" id="navbar" expand="lg"  >
              
                    <img src={imagenes.img1}
                                justify="content-between"
                                width="60"
                                height="90"
                                alt=""/>
                

                <Container fluid="md">
                     <Navbar.Brand href="/home">Se Lo Recomiendo
                        <span id="usuario sub-branm"></span>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link href="/quienes">Quienes Somos</Nav.Link>
                            <Nav.Link href="/servicios">Servicios Disponibles</Nav.Link>
                            <Nav.Link href="/terminos">Terminos y Condiciones</Nav.Link>
                            <Nav.Link href="/contacto">Contáctenos</Nav.Link>       

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario" href="../login ">
                            <Dropdown.Header id= "dropdown-header">
                                <Row>
                                   <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1"> Cerrar Sesión</Dropdown.Item>
                            
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </DropdownButton>
    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            
        );
    }
}
 