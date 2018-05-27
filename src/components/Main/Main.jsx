import React from 'react';
import { Segment } from 'semantic-ui-react'

import ClientDetail from '../ClientDetail'
import NoItems from '../NoItems'

export default ({ client }) =>
    <Segment style={{ marginLeft: '250px', marginTop: '0px' }}>
        {client
            ? <ClientDetail client={client} />
            : <NoItems content='No selected items!' />}
    </Segment>