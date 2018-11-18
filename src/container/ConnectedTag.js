import { connect } from 'react-redux';
import Tag from '../components/Tag';

// Prevent un-change filters re-render we need to connect it with redux.
// const mapStateToProps = (state, ownProps) => {
// 	const { activeTag } = state.tagReducer;
// 	const active = ownProps.name === activeTag ? !ownProps.active : false;
// 	debugger;
// 	return {
// 		active,
// 	}
// }
export default connect()(Tag);