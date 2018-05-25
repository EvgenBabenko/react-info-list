import React, { Component } from 'react'
import { connect } from 'react-redux'

import ClientList from './ClientList'
import store from '../../modules/store'
import { clientsAction } from '../../modules/clients'
import clients from '../../clients.json'

class ClientListWrapper extends Component {
    componentDidMount() {
        store.dispatch(clientsAction.getClients(clients))
        console.log(1)
    }
    
    render() {
        return (
            <ClientList {...this.props} />
        )
    }
}

const getFilteredClients = (clients, search) =>
    clients.filter(({ general: { firstName } }) => new RegExp(search, 'gi').test(firstName))

const mapStateToProps = (state) => ({
    clients: getFilteredClients(state.clients, state.search)
})

export default connect(mapStateToProps)(ClientListWrapper)