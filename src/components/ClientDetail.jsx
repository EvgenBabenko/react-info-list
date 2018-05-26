import React from 'react'
import { Header, Grid, Segment, Item, List, Container } from 'semantic-ui-react'

const mapProps = {
    email: 'mail',
    phone: 'phone',
    street: 'address book',
    city: 'marker',
    zipCode: 'location arrow',
    country: 'world'
}

const renderValues = (object) => Object.keys(object).map((key, index) =>
    <List.Item key={index} icon={mapProps[key]} content={object[key]} />
)

const Info = (content, children) => 
    <Segment>
        <Header as='h3' content={content} />
        <List children={children} />
    </Segment>

export default ({ client: { general: { avatar, firstName }, job: { title, company }, address, contact } }) => {
    return (
        <Container>
            <Item.Group>
                <Item>
                    <Item.Image src={avatar} />
                    <Item.Content>
                        <Item.Header as='h1' content={firstName} />
                        <Item.Meta content={`${title} - ${company}`} />
                    </Item.Content>
                </Item>
            </Item.Group>

            <Grid columns={2} stackable divided >
                <Grid.Row stretched>
                    <Grid.Column >
                        {Info('Address', renderValues(address))}
                    </Grid.Column>
                    <Grid.Column>
                        {Info('Contact', renderValues(contact))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}