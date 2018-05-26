import React from 'react';
import { Item } from 'semantic-ui-react'

import Client from '../Client'

const style = {
    height: '500px',
    overflowY: 'scroll',
    margin: '0'
}

export default ({ clients, clickClientId }) => 
    <Item.Group divided style={style}>
        {clients.map(client =>
            <Client 
                key={client.id}
                onClick={ () => clickClientId(client.id) }
                {...client}
            />
        )}
    </Item.Group>