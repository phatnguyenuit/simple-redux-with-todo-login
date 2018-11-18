import { connect } from 'react-redux';
import FilterList from '../components/FilterList';

const mapStateToProps = (state) => {
	const { filters } = state.filterReducer;
	return {
		filters
	}
}
export default connect(mapStateToProps)(FilterList);