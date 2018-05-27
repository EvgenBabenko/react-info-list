import { connect } from 'react-redux'

import Main from './Main'
import { findItem } from '../../selectors'

const mapStateToProps = state => ({
    client: findItem(state)
})

export default connect(mapStateToProps)(Main)