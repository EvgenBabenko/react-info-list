import React, { Component } from 'react'
import { connect } from 'react-redux'

import ClientList from './ClientList'
import store from '../../modules/store'
import { clientsAction } from '../../modules/clients'
import clients from '../../clients.json'

class ClientListWrapper extends Component {
    componentDidMount() {
        store.dispatch(clientsAction.getClients(clients))
    }
    
    render() {
        return (
            <ClientList {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    clients: state.clients
})

export default connect(mapStateToProps)(ClientListWrapper)