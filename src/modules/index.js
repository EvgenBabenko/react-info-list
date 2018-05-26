import { combineReducers } from 'redux'

import search from './search';
import clients from './clients'
import active from './active'
import filter from './filter'

export default combineReducers({
    search,
    clients,
    active,
    filter,
})