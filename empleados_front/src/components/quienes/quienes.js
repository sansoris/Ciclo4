/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container } from 'react-bootstrap';
// import { img } from '../assets/img';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';

// import { stylesheet } from href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity = "sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin = "anonymous";
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
//     <link rel="stylesheet" href="./css/footer.css"></link>



export default class Quienes extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        
    };
}

    render() {
        return (
            <Container class="slider_section">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <div class="container-fluid padding_dd">
                                <div class="carousel-caption">
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
                                            <div class="images_box">
                                                <img src=" ../img/quienes01.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div class="container-fluid padding_dd">
                                <div class="carousel-caption">

                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div class="text-bg">
                                                <span>Se lo recomiendo</span>
                                                <h1>Quienes somos</h1>
                                                <p>Equipo de estudiantes en tecnologías de la información, quienes queremos aportar a nuestra comunidad una plataforma de búsqueda de servicios de mantenimiento donde puedan encontrarse fácilmente contactos recomendados por la misma comunidad.</p>
                                                <a href="/contacto">Contáctenos</a> <a href="/recomendar">Recomendar </a>
                                            </div>
                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div class="images_box">
                                                <img src=" ../img/Plomero01.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="carousel-item">

                            <div class="container-fluid padding_dd">
                                <div class="carousel-caption ">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div class="text-bg">
                                                <span>Quienes somos</span>
                                                <h1>Se lo recomiendo</h1>
                                                <h2>Qué queremos lograr: </h2>
                                                <p>●	Brindar información de contactos que presten servicios de mantenimiento en una comunidad.
                                                    ●	Generar una red de información de contactos de prestadores de servicios de mantenimiento por medio de recomendaciones de clientes o conocidos.
                                                    ●	Ampliar la publicidad de los servicios prestados por un recomendado.
                                                    ●	Ampliar la base de clientes de servicios de mantenimiento del contacto recomendado.
                                                </p>

                                                <a href="/contacto">Contáctenos</a> <a href="/recomendar">Recomendar </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div class="images_box">
                                                <img src=" ../img/Electrico01.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a><a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a></div>
            </Container>
        );
    }
}
