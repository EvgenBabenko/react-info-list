import React from 'react';
import Client from '../Client'

export default ({ clients }) => 
    <div>
        {clients.map((client, index) =>
            <Client 
                key={index}
                {...client}
            />
        )}
    </div>