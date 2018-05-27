import React, { Component } from 'react'
import { connect } from 'react-redux'

import ClientList from './ClientList'
import NoItems from '../NoItems'
import store from '../../modules/store'
import { clientsAction } from '../../modules/clients'
import { activeAction } from '../../modules/active'
import { getFilteredClients } from '../../selectors'
import { addFieldID } from '../../utils'
import clients from '../../clients.json'

class ClientListWrapper extends Component {
    componentDidMount() {
        /*
        fetch data from server and put response.json() instead clients, like:

        fetch(url)
            .then(responce => responce.json())
            .then(data => store.dispatch(clientsAction.getClients(addFieldID(data))))
            .catch(error => console.error(error))
        */
       
        store.dispatch(clientsAction.getClients(addFieldID(clients)))
    }
    
    render() {
        return (
            this.props.clients.length
                ? <ClientList {...this.props} />
                : <NoItems content='No data to show!' />
        )
    }
}

const mapStateToProps = (state) => ({
    clients: getFilteredClients(state)
})

const mapDispatchToProps = dispatch => ({
    clickClientId: id => dispatch(activeAction.setActive(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientListWrapper)