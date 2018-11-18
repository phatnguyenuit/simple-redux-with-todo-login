import { connect } from 'react-redux';
import Filter from '../components/Filter';

// Prevent un-change filters re-render we need to connect it with redux.
const mapStateToProps = (state, ownProps) => {
	const { activeFilter } = state.filterReducer;
	const active = ownProps.name === activeFilter;
	return {
		active,
	}
}
export default connect(mapStateToProps)(Filter);