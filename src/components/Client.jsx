import React from 'react';
import { Image, Item } from 'semantic-ui-react'

export default ({ general: { avatar, firstName }, job: { title }, onClick }) =>
    <Item onClick={onClick}>
        <Image src={avatar} circular />

        <Item.Content>
            <Item.Header content={firstName} />
            <Item.Description content={title} />
        </Item.Content>
    </Item>