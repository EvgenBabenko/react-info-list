import { searchTypes } from './'

export default (state = '', action) => {
    switch (action.type) {
        case searchTypes.SET_SEARCH:
            return action.value;
        default:
            return state;
    }
}