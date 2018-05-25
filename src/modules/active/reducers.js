import { activeTypes } from './'

export default (state = null, action) => {
    switch (action.type) {
        case activeTypes.SET_ACTIVE:
            return action.id;
        default:
            return state;
    }
}