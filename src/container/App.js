import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "../page/AboutPage";
import LoginPage from "../page/LoginPage";
import NavBar from "../components/NavBar";
import PageNotFound from "../page/PageNotFound";
import React from "react";
import TodoPage from "../page/TodoPage";
import { connect } from "react-redux";

const App = ({ dispatch, user }) => {
  return (
    <>
      <NavBar user={user} dispatch={dispatch} />
      <div className="container-fluid" role="main">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                const { location } = props;
                if (user) return <TodoPage />;
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: {
                        from: location
                      }
                    }}
                  />
                );
              }}
            />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
      <footer id="footer">
        <div className="container">Copyright Phat Nguyen</div>
      </footer>
    </>
  );
};

const mapStateToProps = state => {
  const { user } = state.authenticationReducer;
  // Should pass location to this Container to activate route feature in it and its childs
  const { location } = state.router;
  return {
    user,
    location
  };
};

export default connect(mapStateToProps)(App);
