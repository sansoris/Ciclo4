
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'

import './home.css';
import uno from '../assets/img/1.png';
import dos from '../assets/img/2.png';
import tres from '../assets/img/3.png';
import card1 from '../assets/img/Card_1.png'
import card2 from '../assets/img/Card_2.png'
import card3 from '../assets/img/Card_3.png'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return (
            <><Carousel variant="dark" id="carousel-container">
                <Carousel.Item>
                    <img
                        className="banner"
                        src={uno}
                        alt="First slide" />
                    <Carousel.Caption >
                        <h1>Se lo Recomiendo</h1>
                        <p>Ofrece la solución que su hogar necesita.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner"
                        src={dos}
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h1>Se lo Recomiendo</h1>
                        <p>¿Cómo funciona?.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner"
                        src={tres}
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h1>Se lo Recomiendo</h1>
                        <p>Encontrar varios servicios en un solo lugar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                

                <CardGroup>
                    
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Ofreces servicios</Card.Title>
                            <Card.Text>
                                Vincúlate a nuestro equipo registrando toda tu información en el formulario de registro
                            </Card.Text>
                            <Button id="cardButton" variant="primary" href="/recomendar">Vincúlate</Button>
                        </Card.Body>
                    </Card>
                
                
            
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Buscas servicios</Card.Title>
                            <Card.Text>
                                Busca el profesional que necesitas
                            </Card.Text>
                            <Button id="cardButton" variant="primary" href="/servicios">Consulta</Button>
                        </Card.Body>
                </Card>
                
                         <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={card3}  />
                        <Card.Body>
                            <Card.Title>Califica el servicio</Card.Title>
                            <Card.Text>
                                Tu opinión es muy valiosa para mejorar el portafolio del profesional y para que otros clientes lleguen y puedan beneficiarse de la información registrada
                            </Card.Text>
                            <Button id="cardButton" variant="primary"href="/contacto">Califica</Button>
                        </Card.Body>
                    </Card>
                   
                </CardGroup></>
            
        );
    }
}