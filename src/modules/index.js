import { combineReducers } from 'redux'

import search from './search';
import clients from './clients'

export default combineReducers({
    search,
    clients,
})