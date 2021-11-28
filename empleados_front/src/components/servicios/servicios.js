import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import plomeria from '../assets/img/plomeria.png';
import electricidad from '../assets/img/electricidad.png';
import cerrajeria from '../assets/img/cerrajeria.png';
import gasod from '../assets/img/gasod.png';
import carpinteria from '../assets/img/carpinteria.png';
import electronicos from '../assets/img/electronicos.png';
import pintura from '../assets/img/pintura.png';
import albanileria from '../assets/img/albanileria.png';
import mecanica from '../assets/img/mecanica.png';

export default class Servicios  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




    render() { 
        return (


            <Container>
                <div class="text-bg" style={{ "font-size":50 }}>
                            <span>Bienvenido </span>
                            <h1>Se lo recomiendo</h1>
                            <p>NUESTROS RECOMENDADOS PUEDEN AYUDARLE CON LAS SIGUIENTES ACTIVIDADES</p>
                </div>
                <Row>
                    <Col>
                        <h3 >Plomería</h3>
                        <img
                            className="banner"
                            src={plomeria}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href= '/recomendados'
                        />
                    </Col>
                    <Col>
                      <h3>Electricidad</h3>
                        <img
                            className="banner"
                            src={electricidad}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/recomendados"
                        />
                    </Col>
                    
                    <Col> <h3>Cerrajería</h3>
                        <img
                            className="banner"
                            src={cerrajeria}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                </Row>
                <Row>
                    <Col><h3>Gasodomésticos</h3>
                        <img
                            className="banner"
                            src={gasod}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                    <Col><h3>Carpintería</h3>
                        <img
                            className="banner"
                            src={carpinteria}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                    <Col><h3>Electrónicos</h3>
                        <img
                            className="banner"
                            src={electronicos}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                </Row>
                    <Row>
                    <Col><h3>Pintura</h3>
                        <img
                            className="banner"
                            src={pintura}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                    <Col><h3>Mecánica</h3>
                        <img
                            className="banner"
                            src={mecanica}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                    <Col><h3>Albañilería</h3>
                        <img
                            className="banner"
                            src={albanileria}
                            alt="first slide"
                            style={{ width: "120px" }}
                            href="/Recomendados"
                        /></Col>
                </Row>
            </Container> 
       
        );
    }
}