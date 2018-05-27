import React from 'react';
import { Grid } from 'semantic-ui-react'

import Aside from './Aside'
import Main from './Main'

export default () => {
    return (
        <Grid>
            <Grid.Column width={6} children={<Aside />} />
            <Grid.Column width={10} children={<Main />} />
        </Grid>
    )
}