import React from 'react';
import { Container, Row, Form , Button} from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from '../loading/loading';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import ConfirmationPrompts from '../prompts/confirmation';
// import Button from '@restart/ui/esm/Button';

export default class RecomendadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idRecomendado: this.props.getIdRecomendado(),
            rediret: false,
            message: {
                text: '',
                show: false, 
            },
            confirmation: {
                title: 'Modificar recomendado',
                text: '¿Desea Modificar el recomendado?',
                show: false,
            },

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

        this.onCancel= this.onCancel.bind(this);
        this.onConfirm= this.onConfirm.bind(this);

    }


    componentDidMount() {
        this.getRecomendado();
    }


    getRecomendado() {
        this.setState({ loading: true });
        request
            .get(`/recomendados/${this.state.idRecomendado}`)
            .then((response) => {
                this.setState({
                    recomendado: response.data,
                    loading:false,
                })
                // console.log(response);
                // this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
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
            
            .put(`/recomendados/${this.state.idRecomendado}`, this.state.recomendado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true
                        },
                    });
                    // this.props.changeTab('buscar');
                }
                this.setState({ loading: false })
                // console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            }
        });
    }

    onConfirm() {
        this.setState(
            {
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        },
             this.guardarRecomendados()
        );
       
    }
    

    render() {
        return (
        
            <Container id="recomendados-crear-container" >

                <ConfirmationPrompts
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}

                />
                <Loading show={ this.state.loading } />
             <Row>
                    <h1>
                        Editar Recomendado
                    </h1>

                </Row>
                <form class="formulario" action="#" method="POST">


                    <div class="contenedor de campos">
                        <div class="campo">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value= { this.state.recomendado.nombre }
                                onChange = {(e) => this.setValue('nombre', e.target.value)}
                            />
                        </div>
                        <div class="campo">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                value= { this.state.recomendado.apellido }
                                onChange = {(e) => this.setValue('apellido', e.target.value)}
                            />
                        </div>
                        <div class="campo">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                value= { this.state.recomendado.telefono }
                                onChange = {(e) => this.setValue('telefono', e.target.value)}
                            />
                        </div>
                        <div class="campo">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                value= { this.state.recomendado.ciudad }
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
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show:true},
                                })
                            }
                            >Editar Recomendado
                        </Button>

      
                </div>
                </form>
                
              
           </Container >
           
    )
    
    } 

}
