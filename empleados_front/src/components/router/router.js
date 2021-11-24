import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../login/login';
// import PrivateRoute from '../auth/privateroute';

import Buscar from '../crud/buscar';
import Recomendados from '../crud';
import Contacto from '../contacto/contacto';
import Quienes from '../quienes/quienes';
import Recomendar from '../recomendar/recomendar';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={ ["/", "/login"] } component={ Login } />
                {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                <Route exact path={ ["/contacto"] } component={ Contacto }/>
                <Route exact path={ ["/recomendados"] } component={ Recomendados } />
                <Route exact path={["/buscar"]} component={Buscar} />
                <Route exact path={ ["/quienes"] } component={ Quienes } />
                <Route exact path={["/recomendar"]} component={Recomendar} />
                
                <Route path={ "*" } component={() => (
                    <h1 style={{ marginTop: 250 }}>
                     404
                    <br />
                    PAGINA NO ENCONTRADA
                    </h1>
                    )}
                />
            </Switch>
        </Router>
    );
}

// function Dashboard() {
//     return(
//         <div>
//         <h2 style={{ marginTop: 200 }} > Menu usuario registrado</h2>
//         </div>
// )
// }
