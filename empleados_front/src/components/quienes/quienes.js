import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import quienes01 from '../assets/img/quienes01.jpg';
import Plomero01 from '../assets/img/Plomero01.jpg';
import Electrico01 from '../assets/img/Electrico01.jpg';


export default class Quienes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

        
    render() { 
        return (
            
             <Carousel variant="dark" id="carousel-container">
                <Carousel.Item>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="text-bg">
                            <span>Bienvenido </span>
                            <h1>Se lo recomiendo</h1>
                            <p>Recomendaciones generadas por una base de contactos de posibles prestadores de servicios para fomentar el trabajo de profesionales sin página web o no reconocidos a nivel local.</p>
                            <a href="/contacto">Contáctenos</a> <a href="/recomendar">Recomendar </a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img
                        className="banner"
                        src={quienes01}
                        alt="First slide" />
                    </div>
                </div>
                </Carousel.Item>

                 <Carousel.Item>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="text-bg">
                            <span>Se lo recomiendo </span>
                            <h1>Quienes somos</h1>
                            <p>Equipo de estudiantes en tecnologías de la información, quienes queremos aportar a nuestra comunidad una plataforma de búsqueda de servicios de mantenimiento donde puedan encontrarse fácilmente contactos recomendados por la misma comunidad.</p>
                            <a href="/contacto">Contáctenos</a> <a href="/recomendar">Recomendar </a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img
                        className="banner"
                        src={Plomero01}
                        alt="Second slide" />
                    </div>
                </div>
                </Carousel.Item>

                 <Carousel.Item>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="text-bg">
                            <span>Quienes somos </span>
                                <h1>Se lo recomiendo</h1>
                                <h2>Qué queremos lograr:</h2>
                                <p> ●	Brindar información de contactos que presten servicios de mantenimiento en una comunidad.
                                    ●	Generar una red de información de contactos de prestadores de servicios de mantenimiento por medio de recomendaciones de clientes o conocidos.
                                    ●	Ampliar la publicidad de los servicios prestados por un recomendado.
                                    ●	Ampliar la base de clientes de servicios de mantenimiento del contacto recomendado.
                                </p>
                                <a href="/contacto">Contáctenos</a> <a href="/recomendar">Recomendar </a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img
                        className="banner"
                        src={Electrico01}
                        alt="Third slide" />
                    </div>
                </div>
                </Carousel.Item>

            </Carousel>
                
          

        );
    }
}