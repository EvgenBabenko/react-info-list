import React from 'react';
import ClientList from './ClientList'
import Search from './Search'
import { Sticky } from 'semantic-ui-react'

export default () => 
    <div className="aside">
        <Sticky>
            <Search />
        </Sticky>
        <ClientList />
    </div>