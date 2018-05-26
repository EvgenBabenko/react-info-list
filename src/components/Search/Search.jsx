import React from 'react';
import { Input } from 'semantic-ui-react'

export default ({ changeSearchValue, search }) =>
    <Input
        onChange={ (e) => changeSearchValue(e.target.value) }
        value={search}
        icon='search'
        placeholder='Search...'
        fluid
    />