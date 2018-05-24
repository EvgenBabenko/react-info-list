import { searchTypes } from './'

const setSearch = (value) => ({
    type: searchTypes.SET_SEARCH,
    value
})

export default { setSearch }