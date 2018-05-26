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
        {clients.map((client, index) =>
            <Client 
                key={index}
                onClick={ () => clickClientId(index) }
                {...client}
            />
        )}
    </Item.Group>