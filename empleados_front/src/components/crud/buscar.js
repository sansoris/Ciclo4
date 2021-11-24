import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
        this.state = {};
    }

    componentDidMount() {}

  render() {
    return (
            <Container id= "recomendados-buscar-container">
                <Row>
                    <h2> Recomendados </h2>
                </Row>
                <Row>
                    <Datagrid  url='/recomendados' columns={ columns }/>
                </Row>
            </Container>
        );
    }
}