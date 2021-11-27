import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
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
                servicio_2: "",
                servicio_3: ""
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
                if (response.data.exito) {
                    this.props.changeTab('buscar');
                }
                this.setState({ loading: false })
                // console.log(response.data);
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
                    <h1>
                        Crear Recomendado
                    </h1>

                </Row>
                <form class="formulario" action="#" method="POST">


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
                        </div>
                        <div class="campo">
                            <Form.Label>Servicio 1</Form.Label>
                            <Form.Control
                                value= { this.state.recomendado.servicio_1 }
                                onChange = {(e) => this.setValue('servicio_1', e.target.value)}
                            />
                        </div>
                        <div class="campo">
                            <Form.Label>Servicio 2</Form.Label>
                            <Form.Control
                            value= { this.state.recomendado.servicio_2 }
                            onChange = {(e) => this.setValue('servicio_2', e.target.value)}
                            />
                        </div>
                        <div class="campo">
                            <Form.Label>Servicio 3</Form.Label>
                            <Form.Control
                            value= { this.state.recomendado.servicio_3 }
                            onChange = {(e) => this.setValue('servicio_3', e.target.value)}
                            />
                        </div>
                   
                   
                    <Button
                            variant="primary"
                            style={{"background-color": '#8b0000', "border-color": '#8b0000' }}
                            onClick={() =>
                                this.setState
                            }
                            >Crear Recomendado
                        </Button>
                </div>
            </form>
                
                    
           </Container>
           
    )
    
    } 

}
