import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';

import RecomendadosBuscar from './buscar';
import RecomendadosCrear from './crear';
import RecomendadosEditar from './editar';

import '../recomendados/recomendados.css';

export default class Recomendados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar",
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this)
        this.setIdRecomendado =this.setIdRecomendado.bind(this)
        this.getIdRecomendado =this.getIdRecomendado.bind(this)
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
}
    
    setIdRecomendado(id){
        this.setState ({ _id: id});
    }

    getIdRecomendado (){
        return this.state._id;
    }

    render() { 
        return (
            <Container id= "recomendados-buscar-container" >
                <Row>
                    <Nav fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) =>
                            // console.log(eventKey)
                            this.setState({ currentTab: eventKey })}
                    >
                    <Nav.Item>
                    <Nav.Link eventKey="buscar" style={{ color: "#8b0000" }}>Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="crear" style={{ color: "#8b0000" }}>Crear</Nav.Link>
                    </Nav.Item>
  
                    </Nav>
                    <Row>
                        {this.state.currentTab === "buscar" ? (
                            <RecomendadosBuscar
                                changeTab={(this.changeTab)}
                                setIdRecomendado={this.setIdRecomendado}
                            />
                        ) : this.state.currentTab === "crear"? (                            
                                <RecomendadosCrear
                                    changeTab={(tab) => this.changeTab(tab)} />
                        ) : (
                                    <RecomendadosEditar
                                        changeTab={(this.changeTab)}
                                        getIdRecomendado={this.getIdRecomendado}
                                    />
                        
                        )}
                    </Row>
</Row>

            </Container>

         );
    }
} ;
