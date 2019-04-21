/* Part 1: Login action creator */

import {
  ACTION_LOGIN_FAIL,
  ACTION_LOGIN_PENDING,
  ACTION_LOGIN_SUCCESS,
  ACTION_LOGOUT
} from "../constants";

import { actionLoadTodo } from "./todoAction";
import { paths } from "../../config";
import { push } from "connected-react-router";
import { users } from "../../api/data";

//Fake user

const actionLoginStart = () => ({
  type: ACTION_LOGIN_PENDING
});

const actionLoginSuccess = user => ({
  type: ACTION_LOGIN_SUCCESS,
  payload: {
    user
  }
});

const actionLoginFail = error => ({
  type: ACTION_LOGIN_FAIL,
  payload: {
    error
  }
});

export const actionLogin = (login, password) => dispatch => {
  dispatch(actionLoginStart());
  setTimeout(
    () =>
      new Promise((resolve, reject) => {
        let loginUser = users.filter(user => user.login === login);
        if (loginUser && loginUser[0].password === password) {
          resolve(loginUser[0]);
        } else reject(new Error("Wrong username or passwrod!"));
      })
        .then(loginUser => {
          dispatch(actionLoginSuccess(loginUser));
          dispatch(actionLoadTodo(loginUser.id));
          dispatch(push(`${paths.home}`));
        })
        .catch(error => {
          dispatch(actionLoginFail(error.message));
        }),
    3000
  );
};

export const actionLogout = () => ({
  type: ACTION_LOGOUT
});
