import React from 'react';
import { Sticky } from 'semantic-ui-react'

import ClientList from './ClientList'
import Search from './Search'

export default () => 
    <React.Fragment>
        <Sticky children={<Search />} />
        <ClientList />
    </React.Fragment>