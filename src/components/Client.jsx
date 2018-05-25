import React from 'react';

export default ({ general, job, onClick }) =>
    <div onClick={onClick}>
        <img src={general.avatar} alt=""/>
        <div>
            <div>{general.firstName}</div>
            <div>{job.title}</div>
        </div>
    </div>