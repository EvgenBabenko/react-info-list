import React from 'react';
import { Menu } from 'semantic-ui-react'

import Client from '../Client'

const style = {
    overflowY: 'scroll',
    width: '100%',
    height: 'calc(100% - 38px)',
    marginTop: '0',
}

export default ({ clients, clickClientId }) => 
    <Menu vertical style={style}>
        {clients.map(client =>
            <Client 
                key={client.id}
                onClick={ () => clickClientId(client.id) }
                {...client}
            />
        )}
    </Menu>