import React from 'react';
import { Navbar, Nav, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Navbar id= "navbar" expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home">Se Lo Recomiendo
                        <span id="usuario sub-branm"></span>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="usuario-navbar-nav" />
                    <Navbar.Collapse id="usuario-navbar-nav">
                    <Nav className="me-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Quienes Somos</Nav.Link>
                             */}

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header>
                                <FontAwesomeIcon icon={faUserCircle} />
                               
                             </Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
                            
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </DropdownButton>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    }
}
 