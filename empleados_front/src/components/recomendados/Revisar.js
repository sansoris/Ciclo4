import React from 'react';
// import { request } from '../helper/helper';
import { Container, Row } from 'react-bootstrap';
import './recomendados.css';
import Datagrid from '../grid/grid';


//  const products = [
//     {
//         id: 1,
//         nombre: "Recomendadonombre 1",
//         apellido: "Recomendadoapellido 1",
//         telefono: 301301301,
//         ciudad: "Bogotá",
//         servicio_1:"Plomeria",
//         servicio_2:"Electricidad",
//         servicio_3: "Tecnología"
//     },
//     {
//         id: 2,
//         nombre: "Recomendadonombre 2",
//         apellido: "Recomendadoapellido 2",
//         telefono: 302302302,
//         ciudad: "Cali",
//         servicio_1:"Jardinería",
//         servicio_2:"Peluquería",
//         servicio_3: "Mascotas"
//     },
//      {
//        id: 3,
//         nombre: "Recomendadonombre 3",
//         apellido: "Recomendadoapellido 3",
//         telefono: 303303303,
//         ciudad: "Neiva",
//         servicio_1:"Carpintería",
//         servicio_2:"Construcción",
//         servicio_3: "Pintura"
//     },

// ];
 

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

    // componentDidMount() {
    //     // request
    //     //     .get('/recomendados')
    //     //     .then((response) => {
    //     //         console.log(response.data);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.error(err);
    //     //     });
    // }



    render() {
               
        return (
            <Container id="recomendados-buscar-container">
                <Row>
                    <h2>
                        Buscar Recomendado
                    </h2>
                </Row>
                <Row>
                    <Datagrid  url= '/recomendados' columns= {columns}/>
                </Row>
               
            </Container>
        );
    }
}