import React from 'react';
import Client from './Client'

import clients from '../clients.json'

export default () => 
    <div>
        {clients.map((client, index) =>
            <Client 
                key={index}
                {...client}
            />
        )}
    </div>