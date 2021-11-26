import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Civil from '../assets/img/civil01.jpg';



export default class Terminos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

        
    render() { 
        return (
            
             <Carousel variant="dark" id="carousel-container">
                <Carousel.Item>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img
                    className="banner"
                    src={Civil}
                    alt="first slide" />
                </div>

                
                    <div >
                        <div class="text-bg">
                            <span>IMPORTANTE </span>
                            
                         
                            <h3>Términos y Condiciones de la plataforma </h3>
                            <h4>* Tratamiento de datos personales </h4>
                            <p>De conformidad con la Ley 1581 de 2012 (protección de datos personales) y mediante el registro del formulario de recomendación, autoriza la recolección, almacenamiento y uso de los datos allí solicitados, con la finalidad de adelantar el trámite de revisión de la información, así como para publicarlos en la plataforma, con el fin de ser contactado por futuros clientes que hagan uso de ella. 
                            Como titular de información tiene derecho a conocer, actualizar y rectificar sus datos personales, solicitar prueba de autorización otorgada para su tratamiento, ser informado sobre el uso que se ha dado a los mismos, presentar quejas ante la SIC por infracción a la ley, revocar la autorización, solicitar la supresión de sus datos en los casos en que sea procedente y acceder en forma gratuita a los mismos.
                            Si requiere información adicional no dude en contactarse Mail: <b>contactenos@selorecomiendo.com.co </b></p>
                            
                        </div>
                    </div>
                    
               
                </Carousel.Item>

                 <Carousel.Item>
                <div class="row">
                    
                    <div class="text-bg">
                            <span>* CONDICIONES </span>
                            <p>Apreciado Usuario: el sitio web de SE LO RECOMIENDO (en adelante el Sitio Web) tiene como función principal proveer información sobre contactos o recomendados quienes cotizarán o  prestarán un servicio domiciliario de así requerirlo; sin embargo una vez contactado el recomendado, no se genera ninguna relación laboral, comercial o responsabilidad por los sericios prestados. </p>
                            <p>Recomendaciones generadas por una base de contactos de posibles prestadores de servicios para fomentar el trabajo de profesionales sin página web o no reconocidos a nivel local.</p>
                            <a href="./CondicionesUso.pdf" >Leer más </a>
                        </div>
                    </div>

                 
                   
               
                </Carousel.Item>

                 

            </Carousel>
                
          

        );
    }
}