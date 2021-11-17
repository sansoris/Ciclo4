import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
     
    }
    render() { 
        return ( 
            <Container>
            <Row> 
                  <h2> INICIAR SESION</h2>
            </Row>
            <Row>
                  <Col
                    sm="12"
                    xs="12"
                    md={{ span:4, offset:4 }}
                    lg={{ span:4, offset:4 }}
                    xl= {{ span:4, offset:4 }}
                            ></Col>
                        </Row>
                            </Container>

                           );
    }

}

