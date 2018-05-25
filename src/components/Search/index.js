import { connect } from 'react-redux'

import Search from './Search'
import { searchAction } from '../../modules/search'

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch => ({
    changeSearchValue: value => dispatch(searchAction.setSearch(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)