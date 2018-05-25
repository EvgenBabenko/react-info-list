import { activeTypes } from './'

const setActive = id => ({
    type: activeTypes.SET_ACTIVE,
    id
})

export default { setActive }