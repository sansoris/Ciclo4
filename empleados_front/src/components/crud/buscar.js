import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import '../recomendados/recomendados.css';
import Datagrid from '../grid/grid';
import { request } from '../helper/helper';
import Loading from '../loading/loading';

import MessagePrompt from '../prompts/message'
import ConfirmationPrompts from '../prompts/confirmation';

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
      this.state = {
        loading: false,
        idRecomendado: null,
        confirmation: {
          title: 'Eliminar recomendado',
          text: ' ¿Desea eliminar un recomendado?',
          show: false,
        },
        message: {
          text: '',
          show: false,
        },
      };

     
      this.onClickEditButton = this.onClickEditButton.bind(this);
      this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
      this.onCancel = this.onCancel.bind(this);
      this.onConfirm = this.onConfirm.bind(this);
    }

  componentDidMount() { }
  
  onClickEditButton(row) {
    // console.log(row)
    this.props.setIdRecomendado(row._id);
    this.props.changeTab('editar');
    
  }


  onClickDeleteButton(row) {
    // this.props.setIdRecomendado(row._id);
    // this.props.changeTab('eliminar');
    this.setState({
      idRecomendado:row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
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
      this.eliminarRecomendado()
    );
  }

  eliminarRecomendado() {
    this.setState({ loading: true });
    request
      .delete(`/recomendados/${this.state.idRecomendado}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        
         this.setState({ loading: false });
        // if (response.data.exito) window.location.reload();
        if (response.data.exito) this.reLoadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  
}

  reLoadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }
  
  
  

  render() {
    return (
      <Container id="recomendados-buscar-container">
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
         
        />

        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />


                <Row>
          <h> Buscar Recomendados </h>
         
                </Row>
                <Row>
          <Datagrid url='/recomendados'
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
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
