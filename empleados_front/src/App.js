import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/router/router';
import { Container } from 'react-bootstrap';
import Base from './components/footer/footer';
// import Login from './components/login/login';

import Menu from './components/navbar/navbar';

// import Dashboard from './components/dashboard/dashboard';


import RecomendadosBuscar from './components/recomendados/recomendados.buscar';

function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <AppRouter />
        <RecomendadosBuscar />
        {/* <Dashboard /> */}
         <Base />
         </Container>
    </div>
  );
}

export default App;
