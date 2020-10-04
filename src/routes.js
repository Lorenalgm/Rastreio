import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cep from './Cep';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            
                <Route path="/cep" component={Cep} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;