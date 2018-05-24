import { clientsTypes } from './'

export default (state = [], action) => {
    switch (action.type) {
        case clientsTypes.GET_CLIENTS:
            return state.concat(action.clients);
        default:
            return state;
    }
}