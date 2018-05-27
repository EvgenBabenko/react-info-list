import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

export default ({ content }) =>
    <Header as='h1' icon>
        <Icon name='announcement' />
        {content}
    </Header>