import React from 'react';
import ClientDetail from '../ClientDetail'
import NoItems from '../NoItems'

export default ({ client }) =>
    <div className="main">
        {client
            ? <ClientDetail client={client} />
            : <NoItems />
        }
    </div>