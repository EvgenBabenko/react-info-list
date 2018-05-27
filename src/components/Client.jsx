import React from 'react';
import { Image, Item, Menu } from 'semantic-ui-react'

export default ({ general: { avatar, firstName }, job: { title }, onClick }) =>
    <Menu.Item onClick={onClick} style={{ padding: '10px' }}>
        <Item.Group unstackable>
            <Item style={{ padding: '0px', display: 'flex' }}>
                <Image src={avatar} size='tiny' circular style={{ height: '100%' }} />
                <Item.Content>
                    <Item.Header content={firstName} />
                    <Item.Description content={title} />
                </Item.Content>
            </Item>
        </Item.Group>
    </Menu.Item>