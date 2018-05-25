import React from 'react';
import Client from '../Client'

export default ({ clients, clickClientId }) => 
    <div>
        {clients.map((client, index) =>
            <Client 
                key={index}
                onClick={ () => clickClientId(index) }
                {...client}
            />
        )}
    </div>