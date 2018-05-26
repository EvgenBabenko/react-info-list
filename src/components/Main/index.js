import { connect } from 'react-redux'

import Main from './Main'

const mapStateToProps = state => ({
    client: state.filter[state.active]
})

export default connect(mapStateToProps)(Main)