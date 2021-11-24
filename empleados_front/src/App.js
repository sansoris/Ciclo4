import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar';
import AppRouter from './components/router/router';
import Base from './components/footer/footer';



export default function App() {

  return (
    <div className="App">
      <Container>
        <Menu />
        <AppRouter />
        <Base />
      </Container>
    </div>
  );
}
