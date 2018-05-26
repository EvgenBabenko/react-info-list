import { filterTypes } from './'

const setFilter = (filter) => ({
    type: filterTypes.SET_FILTER,
    filter
})

export default { setFilter }