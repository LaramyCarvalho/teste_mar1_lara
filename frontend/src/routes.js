import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Cadastro from './pages/cadastro';
import Cadastrar from './pages/cadastro/cadastrar';
import Breweries from './pages/breweries';
import Atualizar from './pages/atualizar';

/**
 * Função a qual define a rota das URLs.
 */
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cadastros/" component={Cadastro} />
            <Route path="/cadastrar/" component={Cadastrar}/>
            <Route path="/breweries" component={Breweries}/>
            <Route path="/atualizar/:id" component={Atualizar}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

