import { connect } from 'react-redux';
import TagList from '../components/TagList';

// Prevent un-change filters re-render we need to connect it with redux.
const mapStateToProps = (state) => {
	const { tags } = state.tagReducer;
	return {
		tags
	}
}
export default connect(mapStateToProps)(TagList);