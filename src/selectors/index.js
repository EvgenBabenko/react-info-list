import { createSelector } from 'reselect'
import flatten from 'flat'

const getClients = state => state.clients
const getSearch = state => state.search
const getActive = state => state.active

const getFilteredClients = createSelector(
    [ getClients, getSearch ],
    (clients, search) =>
        clients.filter((client) => Object.values(flatten(client))
            .some(item => new RegExp(search, 'gi').test(item))
        )
)

const findItem = createSelector(
    [ getClients, getActive ],
    (clients, active) => clients.find(item => item.id === active)
)

export { getFilteredClients, findItem }