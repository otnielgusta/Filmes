import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Filmes from './pages/Filmes';
import NovoFilme from './pages/NovoFilme';
import NovaCategoria from './pages/CategoriaNova';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Logon}/>
                <Route path="/filmes" exact component={Filmes}/>
                <Route path="/filmes/cadastro" component={NovoFilme}/>
                <Route path="/filmes/categorias" component={NovaCategoria}/>
            
            </Switch>
        </BrowserRouter>
    )
}