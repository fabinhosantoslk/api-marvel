import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login/login';
import Cadastro from '../pages/Cadastro/cadastro';
import Profile from '../pages/Profile/profile';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/Profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;