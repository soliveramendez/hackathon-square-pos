import React from 'react';
import { Switch, Route } from "react-router-dom";
import Catalogo from './Catalogo/Catalogo';
import Informes from './Informes/Informes';
import Transacciones from './Transacciones/Transacciones';
import Registros from './Registros/Registros';


const Menu = () => (
    <menu>
            <Route exact path="/" component={Catalogo} />
            <Route path="/inventory" component={Transacciones} />
            <Route path="/transactions" component={Registros} />
            <Route path="/livecart" component={Informes} />
    </menu>
);

export default Menu;
