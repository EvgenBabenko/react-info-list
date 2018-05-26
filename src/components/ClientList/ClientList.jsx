import React from 'react';
import Client from '../Client'
import { Item } from 'semantic-ui-react'

const style = {
    clientList: {
        height: '500px',
        overflowY: 'scroll',
        margin: '0'
    }
}

export default ({ clients, clickClientId }) => 
    <Item.Group divided style={style.clientList}>
        {clients.map((client, index) =>
            <Client 
                key={index}
                onClick={ () => clickClientId(index) }
                {...client}
            />
        )}
    </Item.Group>