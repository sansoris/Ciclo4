import React from 'react';
import { request } from '../helpers/helper';
import { Container, Row, Col } from 'react-bootstrap';
import './recomendados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone,  } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'

const { SearchBar } = Search;


 const products = [
    {
        id: 1,
        nombre: "Recomendadonombre 1",
        apellido: "Recomendadoapellido 1",
        telefono: 301301301,
        ciudad: "Bogotá",
        servicio_1:"Plomeria",
        servicio_2:"Electricidad",
        servicio_3: "Tecnología"
    },
    {
        id: 2,
        nombre: "Recomendadonombre 2",
        apellido: "Recomendadoapellido 2",
        telefono: 302302302,
        ciudad: "Cali",
        servicio_1:"Jardinería",
        servicio_2:"Peluquería",
        servicio_3: "Mascotas"
    },
     {
       id: 3,
        nombre: "Recomendadonombre 3",
        apellido: "Recomendadoapellido 3",
        telefono: 303303303,
        ciudad: "Neiva",
        servicio_1:"Carpintería",
        servicio_2:"Construcción",
        servicio_3: "Pintura"
    },

];
 

const columns = [{
  dataField: 'id',
  text: 'Recomendado ID'
},
    {
  dataField: 'nombre',
  text: 'Nombre Recomendado'
    },
        {
  dataField: 'apellido',
  text: 'Apellido'
    },
        {
  dataField: 'telefono',
  text: 'Contacto Recomendado'
    },
    {
  dataField: 'ciudad',
  text: 'Ciudad Recomendado'
    },
    {
  dataField: 'servicio_1',
  text: 'Servicio 1 Recomendado'
    }
    ,
    {
  dataField: 'servicio_2',
  text: 'Servicio 2 Recomendado'
    },
    {
  dataField: 'servicio_3',
  text: 'Servicio 3 Recomendado'
    }

];



export default class RecomendadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        request
            .get('/recomendados')
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }



    render() {
        const options = {
            custom: true,
            totalSize: products.length
        };
        
        return (
            <Container id="recomendados-buscar-container">
                <Row>
                    <h2>
                        Buscar Recomendado
                    </h2>
                </Row>
                <Row>
                    <ToolkitProvider
                    keyField="id"
                    data={ products }
                        columns={ columns }
                        search
                    >
                        {
                            props => (
                                <>
                                    <hr />
        
  <PaginationProvider
  pagination ={ paginationFactory(options) }
>
  {
    ({
      paginationProps,
      paginationTableProps
    }) => (
        <>
            <Row>
                <Col>
                    <SizePerPageDropdownStandalone {...paginationProps} />
                    </Col>
                <Col>
                    <SearchBar { ...props.searchProps} />
                </Col>
      </Row>
        
       <BootstrapTable
          keyField="id"
          data={ products }
          columns={ columns }
                { ...paginationTableProps }
                { ...props.baseProps }

        /> 
      <PaginationListStandalone
                { ...paginationProps }
            />
            </>
    )
  }
                                    </PaginationProvider>
                          </>      
                            )
}
</ToolkitProvider>    
                </Row>
               
            </Container>
        );
    }
}