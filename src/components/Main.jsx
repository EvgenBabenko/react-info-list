import React from 'react';
import ClientDetail from './ClientDetail'

import clients from '../clients.json'

export default () =>
    <div className="main">
        <ClientDetail client={clients[0]} />
    </div>