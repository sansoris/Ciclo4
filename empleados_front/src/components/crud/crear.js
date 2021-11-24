import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from '../loading/loading';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';


export default class Recomendadoscrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            recomendado: {
                nombre: "",
                apellido: "",
                telefono: "",
                ciudad: "",
                servicio_1: "",
                servicio_2:"",
                servicio_3:""
            }
        };
    }

    setValue(index, value) {
        this.setState ({
            recomendado: {
                ...this.state.recomendado,
                    [index]: value, 
            },
        })
    }
    guardarRecomendados() {
        this.setState({ loading: true });
        request
            .post('/recomendados', this.state.recomendado)
            .then((response) => {
                this.setState({ loading: false })
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
}
    render() {
        return (

            <Container id="recomendados-crear-container" >
                <Loading show={ this.state.loading } />
             <Row>
                    <h2>
                        Crear Recomendado
                    </h2>

                </Row>
                <form class="formulario" action="#" method="POST">

                    <legend>Una vez leído terminos y condiciones, por favor diligencie todos los campos</legend>

                <div class="contenedor de campos">
                    <div class="campo">
                        <label>Nombre</label>
                            {/* <input type="text" name="nombre" placeholder="Nombre" required /> */}
                            <Form.Control
                                onChange = {(e) => this.setValue('nombre', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Apellido</label>
                            {/* <input type="text" name="apellido" placeholder="Apellido" required /> */}
                            <Form.Control
                                onChange = {(e) => this.setValue('apellido', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Teléfono</label>
                            {/* <input type="tel" name="telefono" placeholder="Teléfono" /> */}
                            <Form.Control
                                onChange = {(e) => this.setValue('telefono', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Ciudad</label>
                            {/* <input type="text" name="ciudad" placeholder="Ciudad" /> */}
                            <Form.Control
                                onChange = {(e) => this.setValue('ciudad', e.target.value)}
                            />
                    </div>
                    <div class="form-check">
                         <p>Relacione el (los) servicios que puede prestar </p>
                        {/* <input type="checkbox" class="form-check-input" id="checkbox1" value="" /> */}
                            <label for="checkbox1" class="form-check-label">Servicio 1</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_1', e.target.value)}
                            />
                    </div>
                    <div class="form-check">
                        {/* <input type="checkbox" class="form-check-input" id="checkbox2" value="" /> */}
                            <label for="checkbox2" class="form-check-label">Servicio 2</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_2', e.target.value)}
                            />
                    </div>
                    <div class="form-check">
                        {/* <input type="checkbox" class="form-check-input" id="checkbox3" value="" /> */}
                            <label for="checkbox3" class="form-check-label">Servicio 3</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('Servicio_3', e.target.value)}
                            />
                    </div>
                   
                   
                    <div class="enviar">
                            <input class="boton" type="submit" value="Recomendar" onClick={() => console.log(this.guardarRecomendados())} />
                            {/* <Form.Control
                                onChange = {(e) => this.setValue('Servicio_4', e.target.value)}
                            /> */}
                    </div>
                </div>
                </form>
                
              
                
                    <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
                    <div class="text-bg"></div>
                    </div>
           </Container >
           
    )
    
    } 

}
