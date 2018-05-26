import React, { Component } from 'react'
import { connect } from 'react-redux'
import flatten from 'flat'

import ClientList from './ClientList'
import NoItems from '../NoItems'
import store from '../../modules/store'
import { clientsAction } from '../../modules/clients'
import { activeAction } from '../../modules/active'
import { filterAction } from '../../modules/filter'
import clients from '../../clients.json'

class ClientListWrapper extends Component {
    componentDidMount() {
        store.dispatch(clientsAction.getClients(clients))
    }
    
    render() {
        return (
            this.props.clients.length
                ? <ClientList {...this.props} />
                : <NoItems />
        )
    }
}

const getFilteredClients = (clients, search) => {
    const filtered = clients.filter((client) => Object.values(flatten(client)).some(item => new RegExp(search, 'gi').test(item)))
    store.dispatch(filterAction.setFilter(filtered))
    return filtered
}

const mapStateToProps = (state) => ({
    clients: getFilteredClients(state.clients, state.search)
})

const mapDispatchToProps = dispatch => ({
    clickClientId: id => dispatch(activeAction.setActive(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientListWrapper)