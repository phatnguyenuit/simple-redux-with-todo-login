import FilterList from "../components/FilterList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { filters } = state.filterReducer;
  return {
    filters
  };
};
export default connect(mapStateToProps)(FilterList);
