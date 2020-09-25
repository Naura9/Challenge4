import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

import Belanja from './belanja';

const Utama = () => (
    <Switch>
        <Route path="/belanja" component={Belanja} />
    </Switch>
)

export default Utama;

