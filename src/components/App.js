import React from 'react';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

import Layout from './Layout'
import store from '../modules/store'

export default () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    )
}