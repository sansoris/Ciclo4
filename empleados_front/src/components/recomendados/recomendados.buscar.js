import React from 'react';
import { request } from '../helpers/helper';
import { Container, Row } from 'react-bootstrap'
import './recomendados.css'

export default class RecomendadosBuscar extends React.Component {
    constructor(props) {
        super(props)
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
        })
    }



    render() {
        return (
            <Container id="recomendados-buscar-container">
                <Row>
                    <h1>
                        Buscar Recomendado
                    </h1>
                </Row>
            </Container>
        )
    }
}