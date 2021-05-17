import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const INIT_USER_STATE = { name: null, email: null };

const user = createReducer(INIT_USER_STATE, {
    [authActions.regSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => INIT_USER_STATE,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.regSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const error = createReducer('', {
    [authActions.regFail]: (_, { payload }) => payload,
    [authActions.loginFail]: (_, { payload }) => payload,
    [authActions.logoutFail]: (_, { payload }) => payload,
    [authActions.getCurrentUserFail]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
    [authActions.regSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.regFail]: () => false,
    [authActions.loginFail]: () => false,
    [authActions.getCurrentUserFail]: () => false,
});

export default combineReducers({ user, token, error, isAuthenticated });
