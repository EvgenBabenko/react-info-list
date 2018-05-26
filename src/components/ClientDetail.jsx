import React from 'react'
import { Image, Header, Grid, Segment, Item } from 'semantic-ui-react'

export default ({ client: { general: { avatar, firstName }, job: { title, company }, address, contact } }) => {
    const renderAllValues = (elem) => Object.values(elem).map((item, index) => <div key={index}>{item}</div>)
    
    return (
        <React.Fragment>
            <Item>
                <Image src={avatar} circular />

                <Item.Content>
                    <Item.Header as='h1' content={firstName} />
                    <Item.Meta>{title} - {company}</Item.Meta>
                </Item.Content>
            </Item>

            <Grid columns={2} stackable divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <Header as='h3' content='Address' />
                            {renderAllValues(address)}
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Header as='h3' content='Contact' />
                            {renderAllValues(contact)}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    )
}