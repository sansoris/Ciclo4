import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import login from '../login/login';
import PrivateRoute from '../auth/privateroute';


import recomendados from '../recomendados/recomendados.buscar';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={['/', '/login']} component={login} />
                {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path={['/recomendados']} component={recomendados} />

                <Route
                    path={'*'} component={() => (
                        <h1 style={{ marginTop: 150 }}>
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
//         <h2> Menu usuario registrado</h2>
//         </div>
// )
// }
