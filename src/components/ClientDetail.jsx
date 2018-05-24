import React from 'react';

export default ({ client }) => {
    const toAs = (elem) => Object.values(elem).map((item, index) => <div key={index}>{item}</div>)
    
    return (
        <React.Fragment>
            <img src={client.general.avatar} alt=""/>
            <div>
                <h1>{client.general.firstName}</h1>
                <div>{client.job.title} - {client.job.company}</div>
                <div>
                    <h3>Address</h3>
                    {toAs(client.address)}
                </div>
                <div>
                    <h3>Contact</h3>
                    {toAs(client.contact)}
                </div>
            </div>
        </React.Fragment>
    )
}