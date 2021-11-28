import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import '../recomendados/recomendados.css';
import Datagrid from '../grid/grid';

const columns = [{
  dataField: 'id',
  text: 'Recomendado ID',
  hidden: true, 
},
    {
  dataField: 'nombre',
  text: 'Nombre'
    },
        {
  dataField: 'apellido',
  text: 'Apellido'
    },
        {
  dataField: 'telefono',
  text: 'Contacto'
    },
    {
  dataField: 'ciudad',
  text: 'Ciudad'
    },
    {
  dataField: 'servicio_1',
  text: 'Servicio 1 '
    }
    ,
    {
  dataField: 'servicio_2',
  text: 'Servicio 2 '
    },
    {
  dataField: 'servicio_3',
  text: 'Servicio 3 '
    }

];

export default class RecomendadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

  componentDidMount() { }
  
  onClickEditButton(row) {
 
    this.props.setIdRecomendado(row._id);
    
    this.props.changeTab('editar');
    
      }
    

  render() {
    return (
            <Container id= "recomendados-buscar-container">
                <Row>
                    <h2> Buscar Recomendados </h2>
                </Row>
                <Row>
          <Datagrid url='/recomendados'
            columns={columns}
            showEditButton={true}
            onClickEditButton = {this.onClickEditButton}
          />
        </Row>
        <Form>
          <Button
          
            style={{ "background-color": '#8b0000', "border-color": '#8b0000' , "margin-top": 60}}
            href="/dashboard">Regresar
          </Button>
        </Form>
            </Container>
        );
    }
}
