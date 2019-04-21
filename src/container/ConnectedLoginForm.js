import LoginForm from "../components/LoginForm";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { error, isLoading } = state.authenticationReducer;
  return {
    error,
    isLoading
  };
};
export default connect(mapStateToProps)(LoginForm);
