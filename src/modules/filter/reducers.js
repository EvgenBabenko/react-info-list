import { filterTypes } from './'

export default (state = [], action) => {
    switch (action.type) {
        case filterTypes.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}