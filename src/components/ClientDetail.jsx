import React from 'react'
import { Image, Header } from 'semantic-ui-react'

export default ({ client: { general: { avatar, firstName }, job: { title, company }, address, contact } }) => {
    const renderAllValues = (elem) => Object.values(elem).map((item, index) => <div key={index}>{item}</div>)
    
    return (
        <React.Fragment>
            <Image src={avatar} circular />
            <div>
                <Header as='h1'>{firstName}</Header>
                <div>{title} - {company}</div>
                <div>
                    <Header as='h3'>Address</Header>
                    {renderAllValues(address)}
                </div>
                <div>
                    <Header as='h3'>Contact</Header>
                    {renderAllValues(contact)}
                </div>
            </div>
        </React.Fragment>
    )
}