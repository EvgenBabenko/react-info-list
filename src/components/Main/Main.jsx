import React from 'react';

import ClientDetail from '../ClientDetail'
import NoItems from '../NoItems'

export default ({ client }) =>
    client
        ? <ClientDetail client={client} />
        : <NoItems />