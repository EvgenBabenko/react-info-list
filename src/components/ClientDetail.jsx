import React from 'react';

export default ({ client: { general: { avatar, firstName }, job: { title, company }, address, contact } }) => {
    const renderAllValues = (elem) => Object.values(elem).map((item, index) => <div key={index}>{item}</div>)
    
    return (
        <React.Fragment>
            <img src={avatar} alt=""/>
            <div>
                <h1>{firstName}</h1>
                <div>{title} - {company}</div>
                <div>
                    <h3>Address</h3>
                    {renderAllValues(address)}
                </div>
                <div>
                    <h3>Contact</h3>
                    {renderAllValues(contact)}
                </div>
            </div>
        </React.Fragment>
    )
}