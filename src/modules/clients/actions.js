import { clientsTypes } from './'

const getClients = (clients) => ({
    type: clientsTypes.GET_CLIENTS,
    clients
})

export default { getClients }