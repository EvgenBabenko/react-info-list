import React from 'react';

export default ({ changeSearchValue, search }) => 
    <input 
        onChange={ (e) => changeSearchValue(e.target.value) }
        value={search}
        type="text"
        placeholder="Search..."
    />