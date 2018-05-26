import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Aside from './Components/Aside'
import Main from './Components/Main'

export default class extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={6} children={<Aside />} />
                <Grid.Column width={10} children={<Main />} />
            </Grid>
        )
    }
}