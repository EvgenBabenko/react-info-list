import React from 'react';
import { Sticky } from 'semantic-ui-react'

import ClientList from './ClientList'
import Search from './Search'

const style = {
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    width: '250px',
}

export default () => 
    <div style={style}>
        <Sticky children={<Search />} />
        <ClientList />
    </div>