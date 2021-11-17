import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Login from './components/login/login';
import Menu from './components/navbar/navbar';
import Base from './components/footer/footer';
// import Dashboard from './components/dashboard/dashboard';

import AppRouter from './components/router/router';

function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <Base />
        {/* <Dashboard /> */}
        <AppRouter />
        </Container>
    </div>
  );
}

export default App;
