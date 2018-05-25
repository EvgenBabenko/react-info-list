import { combineReducers } from 'redux'

import search from './search';
import clients from './clients'
import active from './active'

export default combineReducers({
    search,
    clients,
    active,
})