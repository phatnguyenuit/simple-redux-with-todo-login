import TagList from "../components/TagList";
import { connect } from "react-redux";

// Prevent un-change filters re-render we need to connect it with redux.
const mapStateToProps = state => {
  const { tags } = state.tagReducer;
  return {
    tags
  };
};
export default connect(mapStateToProps)(TagList);
